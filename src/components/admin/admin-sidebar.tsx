"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  Settings,
  PenSquare,
  QrCode,
  Ticket,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/settings", label: "Event Settings", icon: Settings },
  { href: "/admin/content", label: "Content", icon: PenSquare },
  { href: "/admin/scanner", label: "Ticket Scanner", icon: QrCode },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0 border-r border-border/40 bg-card hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border/40">
        <Link href="/admin" className="flex items-center space-x-2">
          <Ticket className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/10",
                  pathname === item.href && "bg-primary/10 text-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
