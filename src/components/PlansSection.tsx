import { plans } from '../data/plans';
import { PlanCard } from './PlanCard';
import { Features } from './FeatureItem';
export function PlansSection() {
  return <section id="planos" className="plans-section" aria-labelledby="plans-title">
    <div className="plans-photo photo-window" aria-hidden="true"><img src="/assets/plans-photo.webp" alt="" width="941" height="1672" loading="lazy" /></div>
    <div className="splatter splatter-left" aria-hidden="true" />
    <div className="container plans-inner"><div className="plans-intro"><div><p className="eyebrow">Planos</p><h2 id="plans-title">Escolha o seu<br /><strong>Treino ideal.</strong></h2></div><p className="plans-description">Planos flexíveis para encaixar na sua rotina e te aproximar dos seus objetivos.</p></div>
      <p className="handwritten" aria-hidden="true">Vem treinar<br /><span>com a gente!</span></p>
      <div className="plans-grid">{plans.map(plan => <PlanCard key={plan.name} plan={plan} />)}</div>
      <p className="price-note">Valores de referência, sujeitos à confirmação da academia. Consulte condições e disponibilidade.</p>
      <div className="plans-benefits"><Features /><p className="motto" aria-hidden="true">Disciplina hoje.<br />Resultados sempre.</p></div>
    </div>
  </section>;
}
