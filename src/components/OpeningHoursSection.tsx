import { openingHours } from '../data/openingHours';
import { academyPhotos } from '../data/gallery';
import { AcademyPhoto } from './AcademyPhoto';
import { HoursCard } from './HoursCard';
export function OpeningHoursSection() {
  return <section id="horarios" className="closing-section opening-hours" aria-labelledby="hours-title"><div className="container hours-layout"><div className="section-lead"><h2 id="hours-title">Horários<br /><strong>de funcionamento</strong></h2><p>Mais tempo para você cuidar da sua saúde e do seu bem-estar!</p></div><div className="hours-list">{openingHours.map(hours => <HoursCard key={hours.days} hours={hours} />)}</div><div className="hours-visual"><AcademyPhoto photo={academyPhotos.equipment} /><p aria-hidden="true">Disciplina<br />Foco<br />Evolução<br />Resultados</p></div></div></section>;
}
