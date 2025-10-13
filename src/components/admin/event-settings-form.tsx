"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { ticketTiers } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  eventName: z.string().min(5),
  startDate: z.string(),
  endDate: z.string(),
  tickets: z.array(z.object({
    id: z.string(),
    name: z.string(),
    price: z.coerce.number(),
    capacity: z.coerce.number(),
  }))
});

export function EventSettingsForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "Game On, Party On – Inter-Uni Edition",
      startDate: "2025-12-22",
      endDate: "2025-12-23",
      tickets: ticketTiers.map(t => ({...t, capacity: 5000})),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Settings Saved!",
      description: "Event details have been updated successfully.",
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Event Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="eventName" render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="startDate" render={({ field }) => (
                <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />
                <FormField control={form.control} name="endDate" render={({ field }) => (
                <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Ticket Tiers</h3>
                <div className="space-y-6">
                {form.getValues('tickets').map((ticket, index) => (
                    <div key={ticket.id} className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">{ticket.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField control={form.control} name={`tickets.${index}.price`} render={({ field }) => (
                                <FormItem>
                                <FormLabel>Price (₦)</FormLabel>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name={`tickets.${index}.capacity`} render={({ field }) => (
                                <FormItem>
                                <FormLabel>Capacity</FormLabel>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <Button type="submit">Save Changes</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
