import DashboardNav from "@/components/dashboard-nav";
import DashboardTabs from "@/components/dashboard-tabs";
import DashboardContent from "@/components/dashboard-content";
import DashboardLinks from "@/components/dashboard-links";
import { CarouselSize } from "@/components/carousel-item";

export default function DashboardPage() {
  return (
    <main>
      <DashboardNav />
      <DashboardTabs />
      <DashboardContent />
      <CarouselSize />
      <DashboardLinks />
    </main>
  );
}
