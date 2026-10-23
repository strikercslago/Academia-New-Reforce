export type AcademyPhoto = {
  src: string; srcSet: string; alt: string; width: number; height: number;
  aspectRatio?: number; position?: string;
};
function photo(name: string, alt: string, extra: Partial<AcademyPhoto> = {}): AcademyPhoto {
  return { src: `/assets/${name}-960.webp`, srcSet: `/assets/${name}-480.webp 480w, /assets/${name}-960.webp 960w`, alt, width: 960, height: 1200, ...extra };
}
export const academyPhotos = {
  equipment: photo('equipment', 'Equipamentos de musculação no ambiente preto e amarelo da New Reforce', { aspectRatio: 2.8, position: 'center 35%' }),
  team: photo('team', 'Os três profissionais da equipe New Reforce reunidos na academia', { aspectRatio: 1.9, position: 'center 16%' }),
  brand: photo('structure-wide', 'Estrutura interna da New Reforce Academia', { width: 1448, height: 1086, src: '/assets/structure-wide-1448.webp', srcSet: '/assets/structure-wide-480.webp 480w, /assets/structure-wide-960.webp 960w, /assets/structure-wide-1448.webp 1448w' }),
};
export const gallery: AcademyPhoto[] = [
  photo('training', 'Registro de treino na New Reforce, em frente ao espelho'),
  photo('equipment', 'Bancos, barras e equipamentos da academia'),
  photo('workout', 'Treino em máquina de musculação. Mensagem da publicação: Sem esforço, sem resultado.'),
  photo('team', 'Equipe New Reforce em frente ao painel da academia'),
  photo('consistency', 'Publicação New Reforce: A constância constrói o resultado que a pressa nunca sustenta.'),
];

