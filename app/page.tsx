import DashboardNav from "@/components/dashboard-nav";
import DashboardTabs from "@/components/dashboard-tabs";
import DashboardContent from "@/components/dashboard-content";
import DashboardRowCard from "@/components/dashboard-row-card";

export default function DashboardPage() {
  return (
    <main>
      <DashboardNav />
      <DashboardTabs />
      <DashboardContent />
      <DashboardRowCard />
    </main>
  );
}
