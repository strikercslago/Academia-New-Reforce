import { CalendarDays } from 'lucide-react';
import type { openingHours } from '../data/openingHours';
export function HoursCard({ hours }: { hours: (typeof openingHours)[number] }) {
  return <div className="hours-card"><CalendarDays aria-hidden="true" /><div><h3>{hours.days}</h3><p>Das <strong><time dateTime={hours.opens}>{hours.label.split(' às ')[0]}</time> às <time dateTime={hours.closes}>{hours.label.split(' às ')[1]}</time></strong></p></div></div>;
}
