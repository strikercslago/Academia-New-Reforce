import { ArrowRight, Dumbbell, Instagram, MapPin } from 'lucide-react';
import { contact, contactUrl } from '../data/contact';
import { academyPhotos } from '../data/gallery';
import { AcademyPhoto } from './AcademyPhoto';
import { ContactButton, WhatsAppIcon } from './ContactButton';
import { LocationPanel } from './LocationPanel';
export function FinalCTASection() {
  return <section id="contato" className="closing-section final-cta" aria-labelledby="contact-title"><div className="container final-layout"><a href="#inicio" className="final-logo" aria-label="New Reforce Academia — voltar ao início"><span className="brand-crop"><img src="/assets/hero-reference.webp" width="1672" height="941" loading="lazy" alt="New Reforce Academia" /></span></a><div className="final-message"><h2 id="contact-title">Vamos começar<br /><strong>a sua nova fase?</strong></h2><p>Entre em contato agora e venha conhecer a New Reforce Academia em Passo Fundo.</p><div className="final-actions"><ContactButton variant="solid" /><a href="#planos" className="button button-outline"><Dumbbell aria-hidden="true" /><span>Ver planos</span><ArrowRight aria-hidden="true" /></a></div></div><div className="final-information"><address><p><MapPin aria-hidden="true" /><span>{contact.city}</span></p>{contact.whatsapp && <a href={contactUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span><small>Fale no WhatsApp</small>{contact.whatsappDisplay}</span></a>}<a href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" /><span>{contact.instagramHandle}</span></a></address><LocationPanel /></div><AcademyPhoto photo={academyPhotos.brand} className="final-photo" /></div></section>;
}
