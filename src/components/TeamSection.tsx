import { UsersRound, ArrowRight } from 'lucide-react';
import { contactUrl } from '../data/contact';
import { academyPhotos } from '../data/gallery';
import { AcademyPhoto } from './AcademyPhoto';
export function TeamSection() {
  return <section id="equipe" className="closing-section team-section" aria-labelledby="team-title"><div className="container team-layout"><div className="section-lead"><h2 id="team-title">Nossa equipe</h2><p><em>Profissionais</em> que te ajudam a ir mais longe.</p></div><AcademyPhoto photo={academyPhotos.team} className="team-photo" /><div className="team-intro"><p>Uma equipe pronta para te orientar, motivar e construir os melhores resultados junto com você.</p><a className="button button-solid" href={contactUrl()} target="_blank" rel="noopener noreferrer"><UsersRound aria-hidden="true" /><span>Conheça nossa equipe</span><ArrowRight aria-hidden="true" /></a></div></div></section>;
}
