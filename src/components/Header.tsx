import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { MobileMenu } from './MobileMenu';
import { navigation } from '../data/navigation';
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-20% 0px -45% 0px' });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function escape(event: KeyboardEvent) { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) setOpen(false); }
    const breakpoint = matchMedia('(min-width: 1200px)');
    function resize() { if (breakpoint.matches) setOpen(false); }
    document.addEventListener('keydown', escape); document.addEventListener('pointerdown', outside); breakpoint.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); breakpoint.removeEventListener('change', resize); };
  }, [open]);
  return <header ref={header} className="site-header"><div className="container header-inner">
    <a href="#inicio" className="brand" aria-label="New Reforce Academia — início"><span className="brand-crop"><img src="/assets/hero-reference.webp" alt="New Reforce Academia" width="1672" height="941" /></span></a>
    <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
    <ContactButton variant="solid" compact />
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <MobileMenu close={() => setOpen(false)} />}
  </div></header>;
}
