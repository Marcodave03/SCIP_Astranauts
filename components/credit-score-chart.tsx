import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CreditScoreChart() {
  const scoreDistribution = [
    { range: "800-900 (Excellent)", count: 45, percentage: 18, color: "bg-green-500" },
    { range: "700-799 (Good)", count: 89, percentage: 36, color: "bg-blue-500" },
    { range: "600-699 (Fair)", count: 67, percentage: 27, color: "bg-yellow-500" },
    { range: "500-599 (Poor)", count: 32, percentage: 13, color: "bg-orange-500" },
    { range: "Below 500 (High Risk)", count: 15, percentage: 6, color: "bg-red-500" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Score Distribution</CardTitle>
        <CardDescription>Current portfolio risk distribution across 248 active clients</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {scoreDistribution.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.range}</span>
              <span className="font-medium">{item.count} clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={item.percentage} className="flex-1" />
              <span className="text-sm text-muted-foreground w-10">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
