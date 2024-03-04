import DashboardNav from "@/components/dashboard-nav";
import DashboardTabs from "@/components/dashboard-tabs";
import DashboardContent from "@/components/dashboard-content";
import DashboardProject from "@/components/dashboard-project";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main>
      <DashboardNav />
      <DashboardTabs />
      <DashboardContent />
      <Card />
      <DashboardProject />
    </main>
  );
}
