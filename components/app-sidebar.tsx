import { BarChart3, FileText, Truck, Settings, Home, Users, CreditCard, Shield } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Credit Scoring",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Document Analysis",
    url: "#",
    icon: FileText,
  },
  {
    title: "Risk Management",
    url: "#",
    icon: Shield,
  },
  {
    title: "Equipment Monitoring",
    url: "#",
    icon: Truck,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Clients",
    url: "#",
    icon: Users,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">SCIP</h2>
            <p className="text-xs text-muted-foreground">Smart Credit Intelligence</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.title === "Dashboard"}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
