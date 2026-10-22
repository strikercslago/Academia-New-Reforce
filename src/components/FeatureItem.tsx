import { Dumbbell, HeartPulse, UsersRound, Trophy, type LucideIcon } from 'lucide-react';
function FeatureItem({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return <li className="feature"><Icon aria-hidden="true" strokeWidth={1.6} /><span>{children}</span></li>;
}
export function Features() {
  return <ul className="features"><FeatureItem icon={Dumbbell}>Estrutura<br />completa</FeatureItem><FeatureItem icon={HeartPulse}>Saúde e<br />bem-estar</FeatureItem><FeatureItem icon={UsersRound}>Profissionais<br />qualificados</FeatureItem><FeatureItem icon={Trophy}>Resultados<br />reais</FeatureItem></ul>;
}
