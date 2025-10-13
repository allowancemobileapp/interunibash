"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { generateTicketBlurb } from "@/ai/flows/automated-ticket-blurbs"
import { Wand2, Loader2 } from "lucide-react"

const formSchema = z.object({
  ticketName: z.string().min(3, "Ticket name is too short"),
  ticketPrice: z.coerce.number().min(0, "Price cannot be negative"),
  ticketPerks: z.string().min(5, "Please list at least one perk"),
});

export function TicketBlurbGenerator() {
  const { toast } = useToast();
  const [generatedBlurb, setGeneratedBlurb] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ticketName: "", ticketPrice: 0, ticketPerks: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedBlurb("");
    try {
      const perksArray = values.ticketPerks.split(',').map(p => p.trim()).filter(p => p.length > 0);
      const result = await generateTicketBlurb({ ...values, ticketPerks: perksArray });
      setGeneratedBlurb(result.blurb);
      toast({
        title: "Blurb Generated!",
        description: "The AI has generated a promotional blurb for your ticket.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error Generating Blurb",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Ticket Blurb Generator</CardTitle>
        <CardDescription>
          Automatically generate promotional text for your ticket tiers. Just provide the details below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="ticketName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticket Name</FormLabel>
                  <FormControl><Input placeholder="e.g., All-Access Pass" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="ticketPrice" render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticket Price (₦)</FormLabel>
                  <FormControl><Input type="number" placeholder="7500" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField control={form.control} name="ticketPerks" render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Perks</FormLabel>
                <FormControl><Textarea placeholder="Access to Sports Day, Entry to Party Night, VIP lounge access..." {...field} /></FormControl>
                <FormDescription>
                    Enter perks separated by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <div className="space-y-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generate Blurb
                </Button>

                {generatedBlurb && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Generated Blurb:</h4>
                        <p className="text-sm text-muted-foreground">{generatedBlurb}</p>
                    </div>
                )}
            </div>

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
