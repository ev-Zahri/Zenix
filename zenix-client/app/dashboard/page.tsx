import { Watchlist } from '@/components/dashboard/Watchlist';
import { ChartArea } from '@/components/dashboard/ChartArea';
import { OrderEntry } from '@/components/dashboard/OrderEntry';

export default function DashboardPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Watchlist />
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-4 gap-4 overflow-hidden min-h-0">
        <ChartArea />
        {/* <OpenPositions /> */}
      </main>
      <OrderEntry />
    </div>
  );
}

