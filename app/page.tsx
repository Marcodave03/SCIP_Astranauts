import { DashboardLayout } from "@/components/dashboard-layout"
import { OverviewCards } from "@/components/overview-cards"
import { CreditScoreChart } from "@/components/credit-score-chart"
import { DocumentAnalysis } from "@/components/document-analysis"
import { RiskAlerts } from "@/components/risk-alerts"
import { EquipmentMonitoring } from "@/components/equipment-monitoring"
import { RecentActivities } from "@/components/recent-activities"
import { MarketTrends } from "@/components/market-trends"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard SCIP</h1>
          <p className="text-muted-foreground">Smart Credit Intelligence Platform - Monitoring & Analytics</p>
        </div>

        <OverviewCards />

        <div className="grid gap-6 md:grid-cols-2">
          <CreditScoreChart />
          <RiskAlerts />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <DocumentAnalysis />
          <EquipmentMonitoring />
          <MarketTrends />
        </div>

        <RecentActivities />
      </div>
    </DashboardLayout>
  )
}
