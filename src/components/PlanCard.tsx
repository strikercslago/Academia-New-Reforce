import type { Plan } from '../data/plans';
import { contactUrl } from '../data/contact';
export function PlanCard({ plan }: { plan: Plan }) {
  const [integer, cents] = plan.price.split(',');
  const Icon = plan.icon;
  return <a className="plan-card" href={contactUrl(plan.name)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar plano ${plan.name}, R$ ${plan.price}`}><div className="plan-heading"><Icon aria-hidden="true" strokeWidth={1.7} /><h3>{plan.name}</h3></div><p className="plan-price"><span className="currency">R$</span> <span>{integer}<sup>,{cents}</sup></span></p><p className="plan-description">{plan.description}</p></a>;
}
