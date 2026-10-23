import { ChevronRight, Dumbbell } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { Features } from './FeatureItem';
export function HeroSection() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="hero-photo photo-window" aria-hidden="true"><img src="/assets/hero-reference.webp" alt="" width="1672" height="941" fetchPriority="high" /></div>
    <div className="splatter splatter-left" aria-hidden="true" />
    <div className="container hero-inner"><div className="hero-copy">
      <p className="eyebrow hero-eyebrow">Saúde <i>•</i> Disciplina <i>•</i> Evolução <i>•</i> <span>Sempre</span></p>
      <h1 id="hero-title"><span>A sua</span><strong>Nova fase</strong><span>Começa aqui.</span></h1>
      <p className="hero-subtitle">Musculação <b>|</b> Emagrecimento <b>|</b> <em>Hipertrofia</em><br className="desktop-break" /> em <em>Passo Fundo.</em></p>
      <p className="hero-description">Mais que uma academia, um estilo de vida.<br className="desktop-break" /> Estrutura completa, profissionais qualificados e um ambiente que te impulsiona a ser a sua melhor versão.</p>
      <div className="hero-actions"><ContactButton variant="solid" /><a href="#planos" className="button button-outline plans-button"><Dumbbell aria-hidden="true" /><span>Ver planos</span><ChevronRight className="button-arrow" aria-hidden="true" /></a></div>
      <Features />
    </div><p className="motto" aria-hidden="true">Disciplina hoje.<br />Resultados sempre.</p></div>
  </section>;
}
