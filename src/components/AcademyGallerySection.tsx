import { ArrowUpRight, Instagram } from 'lucide-react';
import { contact } from '../data/contact';
import { GalleryCarousel } from './GalleryCarousel';
export function AcademyGallerySection() {
  return <section id="galeria" className="closing-section academy-gallery" aria-labelledby="gallery-title"><div className="container gallery-layout"><div className="section-lead"><h2 id="gallery-title">Nossa academia<br /><strong>em movimento</strong></h2><p>Disciplina, resultados e pessoas reais.</p><a href={contact.instagram} className="button button-outline" target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" /><span>Acompanhe no Instagram</span><ArrowUpRight aria-hidden="true" /></a></div><GalleryCarousel /></div></section>;
}
