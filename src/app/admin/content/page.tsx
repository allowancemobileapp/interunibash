import { TicketBlurbGenerator } from "@/components/admin/ticket-blurb-generator";

export default function ContentPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Content Management</h1>
      <p className="text-muted-foreground">
        Use the tools below to generate and manage content for the event website.
      </p>

      <TicketBlurbGenerator />
    </div>
  )
}
