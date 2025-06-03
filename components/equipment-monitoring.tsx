import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Truck, MapPin } from "lucide-react"

export function EquipmentMonitoring() {
  const equipment = [
    {
      id: "EXC-001",
      type: "Excavator",
      client: "PT Konstruksi Jaya",
      utilization: 85,
      status: "active",
      location: "Jakarta Utara",
    },
    {
      id: "BLD-002",
      type: "Bulldozer",
      client: "CV Bangun Sejahtera",
      utilization: 45,
      status: "idle",
      location: "Bekasi",
    },
    {
      id: "CRN-003",
      type: "Crane",
      client: "PT Mining Corp",
      utilization: 92,
      status: "active",
      location: "Bandung",
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "active" ? "text-green-600" : "text-orange-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Equipment Monitoring
        </CardTitle>
        <CardDescription>Real-time GPS tracking & utilization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {equipment.map((item, index) => (
          <div key={index} className="space-y-2 p-3 border rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-sm">
                  {item.id} - {item.type}
                </p>
                <p className="text-xs text-muted-foreground">{item.client}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${getStatusColor(item.status)}`}>{item.status}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Utilization</span>
                <span>{item.utilization}%</span>
              </div>
              <Progress value={item.utilization} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
