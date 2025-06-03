import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingDown, MapPin, DollarSign } from "lucide-react"

export function RiskAlerts() {
  const alerts = [
    {
      type: "Payment Delay",
      client: "PT Konstruksi Mega",
      severity: "high",
      message: "Payment overdue by 15 days",
      time: "2 hours ago",
      icon: DollarSign,
    },
    {
      type: "Equipment Idle",
      client: "CV Bangun Jaya",
      severity: "medium",
      message: "Excavator idle for 5 days",
      time: "6 hours ago",
      icon: MapPin,
    },
    {
      type: "Credit Score Drop",
      client: "PT Mining Solutions",
      severity: "high",
      message: "Score dropped from 750 to 680",
      time: "1 day ago",
      icon: TrendingDown,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Risk Alerts
        </CardTitle>
        <CardDescription>Early warning system notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
            <alert.icon className="h-4 w-4 mt-1 text-muted-foreground" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{alert.type}</p>
                <Badge variant={getSeverityColor(alert.severity) as any}>{alert.severity}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{alert.client}</p>
              <p className="text-sm">{alert.message}</p>
              <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
