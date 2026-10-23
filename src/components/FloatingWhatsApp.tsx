import { useEffect, useState } from 'react';
import { contactUrl } from '../data/contact';
import { WhatsAppIcon } from './ContactButton';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const plans = document.getElementById('planos');
      setVisible(!!plans && plans.getBoundingClientRect().top <= window.innerHeight * .75);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  if (!visible) return null;
  return <a className="floating-whatsapp" href={contactUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chame no WhatsApp para saber mais sobre os planos">
    <span className="floating-whatsapp-message">Dúvidas sobre os planos?<strong>Chame no WhatsApp!</strong></span>
    <span className="floating-whatsapp-icon"><WhatsAppIcon /></span>
  </a>;
}
