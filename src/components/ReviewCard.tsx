import { Star } from 'lucide-react';
import type { Review } from '../data/reviews';
export function ReviewStars({ rating }: { rating: number }) {
  return <span className="review-stars" role="img" aria-label={`${rating.toLocaleString('pt-BR')} de 5 estrelas`}>{[1, 2, 3, 4, 5].map(star => <Star key={star} aria-hidden="true" fill={star <= Math.round(rating) ? 'currentColor' : 'none'} strokeWidth={1.4} />)}</span>;
}
export function GoogleLabel() {
  return <span className="review-source"><span className="google-letter" aria-hidden="true">G</span><span>Avaliação Google</span></span>;
}
export function ReviewCard({ review }: { review: Review }) {
  return <article className="review-card"><GoogleLabel /><header className="review-author"><span className="review-avatar" style={{ backgroundColor: review.avatarColor }} aria-hidden="true">{review.avatarInitial}</span><div><h3>{review.name}</h3><p>{review.details}</p></div></header><div className="review-meta"><ReviewStars rating={review.rating} /><span>{review.relativeDate}</span></div><p className="review-text" lang={review.id === 'laercio-fernandes' ? 'en' : 'pt-BR'}>{review.text}</p></article>;
}
