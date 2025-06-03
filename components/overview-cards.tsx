import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

export function OverviewCards() {
  const cards = [
    {
      title: "Total Portfolio",
      value: "Rp 2.4T",
      change: "+12.5%",
      trend: "up",
      description: "vs last month",
      icon: TrendingUp,
    },
    {
      title: "Active Equipment",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      description: "units monitored",
      icon: CheckCircle,
    },
    {
      title: "Risk Alerts",
      value: "23",
      change: "-15.3%",
      trend: "down",
      description: "active warnings",
      icon: AlertTriangle,
    },
    {
      title: "Processing Time",
      value: "2.3h",
      change: "-45.2%",
      trend: "down",
      description: "avg approval time",
      icon: TrendingDown,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`inline-flex items-center ${card.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {card.change}
              </span>{" "}
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
