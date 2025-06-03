import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CreditCard, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      type: "Credit Application",
      description: "New application from PT Konstruksi Mega for Rp 2.5B",
      status: "pending",
      time: "5 minutes ago",
      icon: CreditCard,
    },
    {
      type: "Document Processed",
      description: "Financial statement analysis completed for CV Bangun Jaya",
      status: "completed",
      time: "12 minutes ago",
      icon: FileText,
    },
    {
      type: "Risk Alert",
      description: "Payment delay detected for PT Mining Solutions",
      status: "alert",
      time: "25 minutes ago",
      icon: AlertTriangle,
    },
    {
      type: "Credit Approved",
      description: "Loan approval for PT Infrastruktur Nusantara - Rp 1.8B",
      status: "approved",
      time: "1 hour ago",
      icon: CheckCircle,
    },
    {
      type: "Equipment Update",
      description: "GPS tracking activated for 3 new excavators",
      status: "info",
      time: "2 hours ago",
      icon: Clock,
    },
  ]

  const getStatusBadge = (status: string) => {
    const config = {
      pending: { variant: "secondary" as const, label: "Pending" },
      completed: { variant: "default" as const, label: "Completed" },
      alert: { variant: "destructive" as const, label: "Alert" },
      approved: { variant: "default" as const, label: "Approved" },
      info: { variant: "outline" as const, label: "Info" },
    }

    const statusConfig = config[status as keyof typeof config] || config.info

    return <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest system activities and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
              <activity.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{activity.type}</p>
                  {getStatusBadge(activity.status)}
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
