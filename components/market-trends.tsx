import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export function MarketTrends() {
  const trends = [
    {
      commodity: "Steel Price",
      value: "$850/ton",
      change: "+5.2%",
      trend: "up",
      impact: "Positive for construction sector",
    },
    {
      commodity: "Fuel Price",
      value: "$0.85/L",
      change: "-2.1%",
      trend: "down",
      impact: "Lower operational costs",
    },
    {
      commodity: "Equipment Demand",
      value: "High",
      change: "+12.8%",
      trend: "up",
      impact: "Strong market conditions",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Market Trends
        </CardTitle>
        <CardDescription>Real-time market indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {trends.map((trend, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">{trend.commodity}</p>
                <p className="text-xs text-muted-foreground">{trend.impact}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm">{trend.value}</p>
              <p
                className={`text-xs flex items-center gap-1 ${
                  trend.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {trend.change}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
