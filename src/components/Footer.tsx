import { ArrowUpRight } from 'lucide-react';
import { contact } from '../data/contact';
export function Footer() {
  return <footer className="institutional-footer"><div className="container"><p>© 2026 New Reforce Academia. Todos os direitos reservados.</p><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div></footer>;
}
