
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
import { useToast } from "@/hooks/use-toast"
import { ticketTiers } from "@/lib/data"
import { usePaystackPayment } from "react-paystack"
import { useMemo, useCallback, useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
})

interface TicketFormProps {
  ticketId: string;
}

export function TicketForm({ ticketId }: TicketFormProps) {
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false);
  const ticket = ticketTiers.find(t => t.id === ticketId);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { name, email, phone } = form.watch();

  const config = useMemo(() => {
    if (!ticket) return null;
    return {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: ticket.price * 100, // Amount in kobo
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
      metadata: {
        name: name,
        phone: phone,
        ticketName: ticket.name,
      }
    };
  }, [email, name, phone, ticket]);

  const onSuccess = useCallback((reference: any) => {
    if (!ticket) return;

    const ticketPrefix = ticket.name.substring(0, 2).toUpperCase();
    const uniqueId = reference.reference.slice(-6).toUpperCase();
    const ticketCode = `${ticketPrefix}-${uniqueId}`;

    toast({
      title: "Payment Successful!",
      description: `Your ticket code is ${ticketCode}. A confirmation has been sent to your email. Ref: ${reference.reference}`,
      duration: 900000,
    });
    setIsProcessing(false);
    form.reset();
  }, [ticket, toast, form]);

  const onClose = useCallback(() => {
    setIsProcessing(false);
  }, []);

  const initializePayment = usePaystackPayment(config!);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!config) {
        toast({
            title: "Error",
            description: "Invalid ticket type selected.",
            variant: "destructive"
        });
        return;
    }
    if (isProcessing) return;
    
    setIsProcessing(true);
    initializePayment({onSuccess, onClose});
  }

  if (!ticket) {
    return (
        <div className="text-center text-destructive">
            <h2 className="text-xl font-bold">Invalid Ticket</h2>
            <p>The ticket you selected does not exist. Please go back and select a valid ticket.</p>
            <Button asChild className="mt-4">
                <Link href="/tickets">Back to Tickets</Link>
            </Button>
        </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Burna Boy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="burna@boy.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="08012345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ticket</span>
                <span>{ticket.name}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₦{ticket.price.toLocaleString()}</span>
            </div>
        </div>

        <Button type="submit" disabled={isProcessing || !form.formState.isValid} className="w-full" size="lg">
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : `Pay ₦${ticket.price.toLocaleString()}`}
        </Button>
      </form>
    </Form>
  )
}
