import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Ticket, XCircle, CheckCircle, AlertTriangle } from "lucide-react";

export default function ScannerPage() {
    // Mock scanner states
    const status = "valid"; // "valid", "invalid", "used", "ready"

    const statusInfo = {
        ready: { icon: <QrCode className="w-16 h-16 text-muted-foreground" />, text: "Ready to scan", description: "Point the camera at a ticket's QR code.", color: "text-muted-foreground" },
        valid: { icon: <CheckCircle className="w-16 h-16 text-green-500" />, text: "Ticket Valid", description: "Ticket #TKT12345 - All-Access Pass", color: "text-green-500" },
        invalid: { icon: <XCircle className="w-16 h-16 text-destructive" />, text: "Ticket Invalid", description: "This QR code is not recognized.", color: "text-destructive" },
        used: { icon: <AlertTriangle className="w-16 h-16 text-amber-500" />, text: "Ticket Already Used", description: "This ticket was scanned at 12:35 PM.", color: "text-amber-500" },
    };

    const currentStatus = statusInfo[status];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <h1 className="text-3xl font-bold font-headline">Ticket Scanner</h1>
      
      <div className="w-full max-w-md aspect-square bg-card rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
        {/* Placeholder for camera feed */}
        <div className="absolute inset-0 bg-black flex items-center justify-center">
            <p className="text-muted-foreground text-sm">[Camera Feed]</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
            <div className="absolute top-0 left-0 border-t-4 border-l-4 border-primary w-12 h-12 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-primary w-12 h-12 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-primary w-12 h-12 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 border-b-4 border-r-4 border-primary w-12 h-12 rounded-br-lg"></div>
        </div>
      </div>

      <Card className={`w-full max-w-md border-2 ${currentStatus.color.replace('text-', 'border-')}`}>
        <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
            {currentStatus.icon}
            <p className={`text-2xl font-bold ${currentStatus.color}`}>{currentStatus.text}</p>
            <p className="text-muted-foreground">{currentStatus.description}</p>
        </CardContent>
      </Card>
      
      <Button size="lg">
        <QrCode className="mr-2 h-5 w-5" />
        Start Scanning
      </Button>
    </div>
  )
}
