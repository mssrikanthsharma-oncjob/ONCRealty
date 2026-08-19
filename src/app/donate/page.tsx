import type { Metadata } from 'next';
import DonatePage from '@/components/pages/DonatePage';

export const metadata: Metadata = { title: 'Donate' };

export default function Page() {
  return <DonatePage />;
}
