import { ChevronRight, Instagram } from 'lucide-react';
import { contact, contactUrl } from '../data/contact';
export function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.4 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="M8.1 7.1c-.7.3-1 1-.8 1.8.7 3 3 5.4 6.1 6.3.8.2 1.7-.1 2.1-.8l.5-1-2.6-1.3-.9 1c-1.4-.6-2.5-1.7-3.1-3l.8-.9-1.1-2.3Z"/></svg>;
}
export function ContactButton({ variant = 'outline', compact = false }: { variant?: 'solid' | 'outline'; compact?: boolean }) {
  const Icon = contact.whatsapp ? WhatsAppIcon : Instagram;
  return <a className={`button button-${variant} contact-button ${compact ? 'compact' : ''}`} href={contactUrl()} target="_blank" rel="noopener noreferrer"><Icon /><span>Falar no {contact.whatsapp ? 'WhatsApp' : 'Instagram'}</span>{!compact && <ChevronRight className="button-arrow" />}</a>;
}
