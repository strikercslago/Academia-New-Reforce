import { firstRowReviews, secondRowReviews } from '../data/reviews';
import { InfiniteReviewsMarquee } from './InfiniteReviewsMarquee';
import { GoogleReviewsSummary } from './GoogleReviewsSummary';
export function ReviewsSection() {
  return <section id="avaliacoes" className="reviews-section" aria-labelledby="reviews-title"><div className="container reviews-intro"><p className="eyebrow">Avaliações reais</p><h2 id="reviews-title">Quem treina,<br /><strong>recomenda.</strong></h2><p>Confira o que nossos alunos e visitantes dizem sobre a experiência na Reforce Academia.</p><span className="reviews-hint">Arraste para explorar. Pause para ler no seu ritmo.</span></div><div className="reviews-rows"><InfiniteReviewsMarquee reviews={firstRowReviews} direction="right" speed={65} label="Faixa superior" /><InfiniteReviewsMarquee reviews={secondRowReviews} direction="left" speed={55} label="Faixa inferior" /></div><div className="container reviews-bottom"><GoogleReviewsSummary /><p className="reviews-snapshot-note">Avaliações, datas relativas, nota e total reproduzidos das capturas fornecidas. Dados de referência, sem atualização automática.</p></div></section>;
}
