import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

import { fetchCardData } from '@/app/lib/data';

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Tel. št." value="070-348-798" type="phone" />
      <Card title="Email" value="jakob.resnik@scv.si" type="email" />
      <Card title="Naslov" value="Rimska cesta 83" type="invoices" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected' | 'email' | 'phone';
}) {
  const Icon = iconMap[type as keyof typeof iconMap];

  let displayValue: React.ReactNode = value;

  if (type === 'email') {
    displayValue = (
      <a href={`mailto:${value}`} className="text-indigo-600 hover:underline">
        {value}
      </a>
    );
  }

  if (type === 'phone') {
    displayValue = (
      <a href={`tel:${value}`} className="text-indigo-600 hover:underline">
        {value}
      </a>
    );
  }

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex items-center p-4">
        {Icon && <Icon className="h-5 w-5 text-gray-700" />}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {displayValue}
      </p>
    </div>
  );
}
