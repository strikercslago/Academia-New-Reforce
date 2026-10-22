import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gallery } from '../data/gallery';
import { AcademyPhoto } from './AcademyPhoto';
export function GalleryCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [limits, setLimits] = useState({ start: true, end: false });
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setLimits({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const observer = new ResizeObserver(update); observer.observe(element);
    element.addEventListener('scroll', update, { passive: true }); update();
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const step = (card?.getBoundingClientRect().width ?? element.clientWidth * .8) + 10;
    element.scrollBy({ left: step * direction, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <div className="gallery-carousel" role="region" aria-roledescription="carrossel" aria-label="Fotos da academia"><ul id="academy-gallery-track" ref={track} className="gallery-track" tabIndex={0} aria-label="Fotografias; use as setas do teclado ou deslize" onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); track.current?.scrollTo({ left: event.key === 'Home' ? 0 : track.current.scrollWidth, behavior: 'instant' }); } }}>{gallery.map((photo, index) => <li key={photo.alt} style={{ '--photo-ratio': photo.aspectRatio ?? photo.width / photo.height } as CSSProperties} aria-label={`Foto ${index + 1} de ${gallery.length}`}><AcademyPhoto photo={photo} /></li>)}</ul><div className="gallery-navigation"><span>O treino. As pessoas. A nossa energia.</span><div><button type="button" onClick={() => move(-1)} disabled={limits.start} aria-label="Foto anterior" aria-controls="academy-gallery-track"><ArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => move(1)} disabled={limits.end} aria-label="Próxima foto" aria-controls="academy-gallery-track"><ArrowRight aria-hidden="true" /></button></div></div></div>;
}

