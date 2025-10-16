"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Question about tickets" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message..." {...field} rows={5} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" size="lg">Send Message</Button>
            </form>
          </Form>
        </div>
        
        <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Direct Contact</h2>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:areanavibe@outlook.com" className="text-muted-foreground hover:text-primary">areanavibe@outlook.com</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">08065554021</p>
                        <p className="text-muted-foreground">07065144485</p>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold font-headline pt-4">Social Media</h2>
            <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 group">
                    <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">@InterUniBash</span>
                </a>
                 <a href="#" className="flex items-center gap-4 group">
                    <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">@InterUniBash</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}