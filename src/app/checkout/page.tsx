
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { TicketForm } from '@/components/ticket-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ticketTiers } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const ticketId = searchParams.get('ticketId');
    const ticket = ticketTiers.find(t => t.id === ticketId);

    if (!ticketId || !ticket) {
        return (
             <div className="text-center">
                <h1 className="text-2xl font-bold font-headline mb-2">Invalid Ticket</h1>
                <p className="text-muted-foreground mb-4">Please select a ticket to purchase.</p>
                <Button asChild>
                    <Link href="/tickets">View Tickets</Link>
                </Button>
            </div>
        )
    }
    
    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Checkout</CardTitle>
                <CardDescription>Complete your purchase for the {ticket.name}.</CardDescription>
            </CardHeader>
            <CardContent>
                <TicketForm ticketId={ticketId} />
            </CardContent>
        </Card>
    );
}


export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24 flex items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    );
}

