import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

export default async function RevenueGoalChart() {
  const { totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  const goal = 2_100;

  function parseCurrency(value: string | number): number {
    if (typeof value === "number") return value;
    return parseFloat(value.replace(/[$,]/g, "")) || 0;
  }

  const earned = parseCurrency(totalPaidInvoices as unknown as string);
  const pending = parseCurrency(totalPendingInvoices as unknown as string);
  const combined = earned + pending;

  const earnedPercent = Math.min((earned / goal) * 100, 100);
  const pendingPercent = Math.min((combined / goal) * 100, 100);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Earnings vs Goal
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="bg-white p-6 rounded-md">
          <div className="w-full bg-gray-200 rounded-md h-8 relative overflow-hidden">
            {/* Earned part */}
            <div
              className="bg-blue-500 h-full absolute left-0 top-0"
              style={{ width: `${earnedPercent}%` }}
            ></div>

            {/* Pending part starts after earned */}
            <div
              className="bg-orange-400 h-full absolute top-0"
              style={{
                left: `${earnedPercent}%`,
                width: `${pendingPercent - earnedPercent}%`,
              }}
            ></div>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            Earned: ${earned.toLocaleString()} | Pending: ${pending.toLocaleString()} | Goal: ${goal.toLocaleString()} (
            {Math.round((combined / goal) * 100)}%)
          </div>
        </div>

        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">
            Lifetime of year goal: ${goal.toLocaleString()}
          </h3>
        </div>
      </div>
    </div>
  );
}