import { ArrowRight, MessageSquare, Star } from 'lucide-react';
import { googleReviews } from '../data/reviews';
import { ReviewStars } from './ReviewCard';
export function GoogleReviewsSummary() {
  return <div className="google-summary"><div className="google-summary-rating"><p className="summary-source"><span className="google-letter" aria-hidden="true">G</span>Avaliações Google</p><h3>{googleReviews.name}</h3><div className="summary-score"><strong>{googleReviews.rating.toLocaleString('pt-BR')}</strong><ReviewStars rating={googleReviews.rating} /></div><p className="summary-count">{googleReviews.count} avaliações</p></div><div className="google-summary-invitation"><MessageSquare className="summary-message-icon" aria-hidden="true" /><h3>Deixe também sua avaliação</h3><p>Sua opinião ajuda novos alunos a conhecerem a New Reforce.</p><a href={googleReviews.url} target="_blank" rel="noopener noreferrer"><Star aria-hidden="true" /><span>Avaliar no Google</span><ArrowRight aria-hidden="true" /></a><small>Abre o perfil da academia no Google Maps.</small></div></div>;
}
