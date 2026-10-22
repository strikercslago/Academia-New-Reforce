import type { AcademyPhoto as Photo } from '../data/gallery';
export function AcademyPhoto({ photo, className = '' }: { photo: Photo; className?: string }) {
  return <div className={`academy-photo ${className}`} style={{ aspectRatio: photo.aspectRatio ?? photo.width / photo.height }}><img src={photo.src} srcSet={photo.srcSet} sizes={className === 'team-photo' ? '(max-width: 767px) 90vw, 45vw' : '(max-width: 767px) 85vw, 35vw'} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" style={{ objectPosition: photo.position ?? 'center' }} /></div>;
}
