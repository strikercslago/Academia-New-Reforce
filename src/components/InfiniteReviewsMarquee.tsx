import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import type { Review } from '../data/reviews';
import { ReviewCard } from './ReviewCard';

type Props = { reviews: Review[]; direction: 'left' | 'right'; speed?: number; label: string };
type Drag = { id: number; x: number; y: number; lastX: number; horizontal: boolean };
const modulo = (value: number, length: number) => ((value % length) + length) % length;

export function InfiniteReviewsMarquee({ reviews, direction, speed = 60, label }: Props) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const width = useRef(0);
  const offset = useRef(0);
  const drag = useRef<Drag | null>(null);
  const [copies, setCopies] = useState(3);
  const [playing, setPlaying] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  const [dragging, setDragging] = useState(false);

  function paint() {
    if (!track.current || width.current <= 0) return;
    offset.current = modulo(offset.current, width.current);
    track.current.style.transform = `translate3d(${offset.current - width.current}px,0,0)`;
  }
  useLayoutEffect(() => {
    const element = viewport.current;
    const set = group.current;
    if (!element || !set) return;
    const measure = () => {
      const nextWidth = set.getBoundingClientRect().width;
      if (!nextWidth) return;
      // Retain the same card and fractional position across responsive resizing.
      if (width.current) offset.current *= nextWidth / width.current;
      width.current = nextWidth;
      setCopies(Math.max(3, Math.ceil(element.clientWidth / nextWidth) + 2));
      paint();
    };
    measure();
    const resize = new ResizeObserver(measure); resize.observe(element); resize.observe(set);
    const intersection = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting)); intersection.observe(element);
    return () => { resize.disconnect(); intersection.disconnect(); };
  }, [reviews]);
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const changePreference = () => { if (preference.matches) setPlaying(false); };
    const changeVisibility = () => setHidden(document.hidden);
    const cancelDrag = () => {
      const pointer = drag.current;
      drag.current = null;
      setDragging(false);
      viewport.current?.classList.remove('is-dragging');
      if (pointer && viewport.current?.hasPointerCapture(pointer.id)) viewport.current.releasePointerCapture(pointer.id);
    };
    preference.addEventListener('change', changePreference);
    document.addEventListener('visibilitychange', changeVisibility);
    window.addEventListener('blur', cancelDrag);
    return () => { preference.removeEventListener('change', changePreference); document.removeEventListener('visibilitychange', changeVisibility); window.removeEventListener('blur', cancelDrag); };
  }, []);
  useEffect(() => {
    if (!playing || !visible || hidden || dragging) return;
    let frame = 0;
    let previous: number | null = null;
    const tick = (time: number) => {
      if (previous !== null && !drag.current) {
        const elapsed = Math.min((time - previous) / 1000, .05);
        offset.current += (direction === 'right' ? 1 : -1) * Math.max(0, speed) * elapsed;
        paint();
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, visible, hidden, dragging, direction, speed]);

  function start(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, horizontal: false };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function finish(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const pointer = drag.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    if (!pointer.horizontal) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) { finish(event); return; }
      if (Math.abs(dx) < 5) return;
      pointer.horizontal = true;
      event.currentTarget.classList.add('is-dragging');
      window.getSelection()?.removeAllRanges();
    }
    event.preventDefault();
    offset.current += event.clientX - pointer.lastX;
    pointer.lastX = event.clientX;
    paint();
  }
  function step(amount: number) {
    const card = group.current?.firstElementChild;
    offset.current += amount * ((card?.getBoundingClientRect().width ?? 300) + 24);
    paint();
  }
  return <div className="reviews-marquee" data-direction={direction}>
    <div ref={viewport} className="reviews-viewport" tabIndex={0} role="region" aria-label={`${label}. Use as setas do teclado ou arraste para navegar.`} onPointerDown={start} onPointerMove={move} onPointerUp={finish} onPointerCancel={finish} onLostPointerCapture={finish} onDragStart={event => event.preventDefault()} onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); step(event.key === 'ArrowLeft' ? 1 : -1); } if (event.code === 'Space') { event.preventDefault(); setPlaying(value => !value); } }}>
      <div ref={track} className="reviews-track">{Array.from({ length: copies }, (_, index) => <div className="reviews-group" ref={index === 1 ? group : undefined} key={index} aria-hidden={index !== 1 ? true : undefined}>{reviews.map(review => <ReviewCard review={review} key={review.id} />)}</div>)}</div>
    </div>
    <div className="reviews-row-controls container"><span>{label} <span aria-hidden="true">{direction === 'right' ? '→' : '←'}</span></span><div><button type="button" onClick={() => step(1)} aria-label={`${label}: mover para a direita`}><ArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => setPlaying(value => !value)} aria-label={`${playing ? 'Pausar' : 'Retomar'} ${label.toLowerCase()}`} aria-pressed={!playing}>{playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}<span>{playing ? 'Pausar' : 'Retomar'}</span></button><button type="button" onClick={() => step(-1)} aria-label={`${label}: mover para a esquerda`}><ArrowRight aria-hidden="true" /></button></div></div>
  </div>;
}
