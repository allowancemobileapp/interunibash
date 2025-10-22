
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { ticketTiers } from "@/lib/data"
import { TicketTier } from "@/lib/types"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  ticketType: z.string({ required_error: "Please select a ticket type." }),
  quantity: z.coerce.number().min(1).max(10),
  promoCode: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

interface TicketFormProps {
  defaultTicketId?: string;
}

export function TicketForm({ defaultTicketId }: TicketFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ticketType: defaultTicketId || "",
      quantity: 1,
      promoCode: "",
      terms: false,
    },
  });

  const selectedTicketId = form.watch("ticketType");
  const quantity = form.watch("quantity");

  const selectedTicket = ticketTiers.find(t => t.id === selectedTicketId);
  const totalAmount = (selectedTicket?.price || 0) * quantity;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Processing Order...",
      description: "Redirecting to payment gateway.",
    });
    // Here you would integrate with Paystack/Stripe
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} />
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
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="08012345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="ticketType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Ticket Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a ticket" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {ticketTiers.map((ticket) => (
                        <SelectItem key={ticket.id} value={ticket.id}>
                        {ticket.name} - ₦{ticket.price.toLocaleString()}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                    <Input type="number" min="1" max="10" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ticket</span>
                <span>{selectedTicket?.name || 'N/A'}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Quantity</span>
                <span>x{quantity}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₦{totalAmount.toLocaleString()}</span>
            </div>
        </div>

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the terms and conditions.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg">Proceed to Payment</Button>
      </form>
    </Form>
  )
}
