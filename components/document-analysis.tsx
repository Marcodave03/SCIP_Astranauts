import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function DocumentAnalysis() {
  const documents = [
    {
      name: "Financial Statement Q3",
      client: "PT Konstruksi Jaya",
      status: "completed",
      confidence: 98,
      time: "2 min ago",
    },
    {
      name: "Project Contract",
      client: "CV Bangun Sejahtera",
      status: "processing",
      confidence: 85,
      time: "5 min ago",
    },
    {
      name: "Equipment Invoice",
      client: "PT Mining Corp",
      status: "review",
      confidence: 92,
      time: "12 min ago",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "review":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "default",
      processing: "secondary",
      review: "outline",
    } as const

    return <Badge variant={variants[status as keyof typeof variants] || "default"}>{status}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Document Analysis
        </CardTitle>
        <CardDescription>AI-powered document processing status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(doc.status)}
              <div>
                <p className="font-medium text-sm">{doc.name}</p>
                <p className="text-xs text-muted-foreground">{doc.client}</p>
              </div>
            </div>
            <div className="text-right space-y-1">
              {getStatusBadge(doc.status)}
              <p className="text-xs text-muted-foreground">{doc.confidence}% confidence</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
