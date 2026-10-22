import { ArrowUpRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { contact } from '../data/contact';
export function LocationPanel() {
  const [loaded, setLoaded] = useState(false);
  return <div className="location-panel location-panel-configured"><div className="location-heading"><MapPin aria-hidden="true" /><div><strong>{contact.address}</strong><p>{contact.city} · CEP {contact.postalCode}</p></div></div><div className="location-map"><iframe title="Localização da New Reforce Academia — Rua Aldino Graeff, 67, Passo Fundo" src={contact.mapEmbedUrl} loading="lazy" onLoad={() => setLoaded(true)} referrerPolicy="no-referrer-when-downgrade" allowFullScreen />{!loaded && <a className="location-map-preview" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir rotas para Rua Aldino Graeff, 67 no Google Maps"><img src="/assets/location-preview.webp" width="767" height="449" alt="Mapa enviado da localização na Rua Aldino Graeff, 67, Boqueirão, Passo Fundo" loading="lazy" /></a>}</div><a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight aria-hidden="true" /></a></div>;
}
