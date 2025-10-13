import { EventSettingsForm } from "@/components/admin/event-settings-form";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Event Settings</h1>
      <EventSettingsForm />
    </div>
  )
}
