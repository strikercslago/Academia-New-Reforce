import { navigation } from '../data/navigation';
export function MobileMenu({ close }: { close: () => void }) {
  return <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={close}>{item.label}</a>)}</nav>;
}
