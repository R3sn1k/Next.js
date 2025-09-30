import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {fetchCardData, } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/aboutus';
 
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contact
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="rounded-xl overflow-hidden shadow-sm col-span-2 lg:col-span-3 bg-gray-50">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps?q=Šempeter+v+Savinjski+dolini,+Slovenia&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
      <div className="mt-6 w-full max-w-2xl mx-auto">
    <Suspense fallback={<RevenueChartSkeleton />}>
        <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email naslov" className="w-full rounded-xl bg-gray-50 p-3 shadow-sm border border-gray-200" />
        <textarea
        placeholder="Sporočilo"
        className="w-full rounded-xl bg-gray-50 p-3 shadow-sm border border-gray-200"
        rows={5}
        ></textarea>
        <input type="submit" value="Send" className="w-full rounded-xl bg-blue-500 text-white font-medium p-3 shadow-sm cursor-pointer hover:bg-blue-600 transition"/>
        </form>
    </Suspense>
    </div>
    </main>
  );
}