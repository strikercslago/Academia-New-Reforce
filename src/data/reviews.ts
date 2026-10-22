export type Review = {
  id: string; name: string; rating: number; text: string; relativeDate: string;
  avatarInitial: string; avatarColor: string; source: 'Google'; details: string;
};
// Transcrição das 24 avaliações visíveis nos anexos de 22/10/2026.
// Notas conferidas individualmente: as 24 capturas mostram cinco estrelas.
// Datas relativas são históricas; não calcular datas de publicação a partir delas.
export const reviews: Review[] = [
  { id: 'luana-montano', name: 'Luana Montano', rating: 5, text: 'TOP', relativeDate: 'há 2 anos', avatarInitial: 'L', avatarColor: '#7952b3', source: 'Google', details: '5 avaliações' },
  { id: 'fabio-paulo', name: 'Fabio Paulo', rating: 5, text: 'Show', relativeDate: 'há 7 anos', avatarInitial: 'F', avatarColor: '#3976d1', source: 'Google', details: 'Guia local · 29 avaliações · 1 foto' },
  { id: 'patricia-garcia', name: 'Patricia Garcia', rating: 5, text: 'Profissionais de qualidade que prezam pelo aluno, atendimento nota 1000', relativeDate: 'há 1 ano', avatarInitial: 'P', avatarColor: '#d83d78', source: 'Google', details: '1 avaliação' },
  { id: 'geisson-pompeu', name: 'Geisson Pompeu', rating: 5, text: 'Profissionais prestativos, com conhecimento e muita dedicação. Ambiente agradável, limpo e organizado.', relativeDate: 'há 4 anos', avatarInitial: 'G', avatarColor: '#7048a5', source: 'Google', details: 'Guia local · 65 avaliações · 90 fotos' },
  { id: 'samuel-rodrigues', name: 'Samuel Rodrigues', rating: 5, text: 'Ambiente bom, aparelhos de boa qualidade, instrutores bons, recepção ótima.', relativeDate: 'há 4 anos', avatarInitial: 'S', avatarColor: '#315fc0', source: 'Google', details: '2 avaliações' },
  { id: 'priciliana-silveira', name: 'Priciliana Silveira', rating: 5, text: 'Excelente! Profissionais que prezam pelo desempenho de seus alunos.', relativeDate: 'há 3 anos', avatarInitial: 'P', avatarColor: '#df336c', source: 'Google', details: 'Guia local · 13 avaliações' },
  { id: 'claison-zin', name: 'Claison Zin', rating: 5, text: 'Lugar muito bom, onde além de praticar exercícios, se faz muitos amigos.', relativeDate: 'há 4 anos', avatarInitial: 'C', avatarColor: '#8456ae', source: 'Google', details: '5 avaliações · 2 fotos' },
  { id: 'andrey-tebaldi-hofmann', name: 'Andrey Tebaldi Hofmann', rating: 5, text: 'Um ambiente de treino bom, com pessoas sempre positivas. Um dos melhores preços da cidade.', relativeDate: 'há 8 anos', avatarInitial: 'A', avatarColor: '#237fbc', source: 'Google', details: 'Guia local · 25 avaliações · 1 foto' },
  { id: 'gustavo', name: 'Gustavo', rating: 5, text: 'Ambiente legal, instrutor muito educado e gente boa.', relativeDate: 'há 4 anos', avatarInitial: 'G', avatarColor: '#28824b', source: 'Google', details: 'Guia local · 64 avaliações' },
  { id: 'vinicius-rodrigues', name: 'Vinicius Rodrigues', rating: 5, text: 'Excelente lugar, bom espaço e atendimento.', relativeDate: 'há 4 anos', avatarInitial: 'V', avatarColor: '#66439e', source: 'Google', details: '3 avaliações · 2 fotos' },
  { id: 'mauricio-tavares', name: 'Mauricio Tavares', rating: 5, text: 'Academia muito dedicada a seus alunos. Parabéns aos profissionais envolvidos.', relativeDate: 'há 4 anos', avatarInitial: 'M', avatarColor: '#2164bb', source: 'Google', details: 'Guia local · 4 avaliações' },
  { id: 'style-shop', name: 'Style Shop', rating: 5, text: 'Ótimo local para quem quer treinar pesado 💪', relativeDate: 'há 8 anos', avatarInitial: 'S', avatarColor: '#2d7d39', source: 'Google', details: 'Guia local · 9 avaliações · 28 fotos' },
  { id: 'teilor-leao', name: 'Teilor Leão', rating: 5, text: 'Bom lugar para treinos, fácil estacionamento.', relativeDate: 'há 8 anos', avatarInitial: 'T', avatarColor: '#7546ac', source: 'Google', details: 'Guia local · 69 avaliações · 2 fotos' },
  { id: 'andre-domeneghini', name: 'Andre Domeneghini', rating: 5, text: 'Ótimo ambiente e professores qualificados.', relativeDate: 'há 6 anos', avatarInitial: 'A', avatarColor: '#3477c8', source: 'Google', details: '2 avaliações' },
  { id: 'edii-muller', name: 'Edii Muller', rating: 5, text: 'Ótimo ambiente.', relativeDate: 'há 2 anos', avatarInitial: 'E', avatarColor: '#00877e', source: 'Google', details: 'Guia local · 16 avaliações · 7 fotos' },
  { id: 'carlos-eduardo-caio', name: 'Carlos Eduardo Caio', rating: 5, text: 'Ótimo ambiente e acompanhamento especializado.', relativeDate: 'há 6 anos', avatarInitial: 'C', avatarColor: '#6943a5', source: 'Google', details: 'Guia local · 49 avaliações · 29 fotos' },
  { id: 'eliane-cabral', name: 'Eliane Cabral', rating: 5, text: 'Muito bom.', relativeDate: 'há 8 anos', avatarInitial: 'E', avatarColor: '#0966a2', source: 'Google', details: 'Guia local · 28 avaliações · 8 fotos' },
  { id: 'fabio-montano', name: 'Fabio Montano', rating: 5, text: 'Melhor academia de Passo Fundo.', relativeDate: 'há 3 anos', avatarInitial: 'F', avatarColor: '#176b31', source: 'Google', details: 'Guia local · 6 avaliações · 1 foto' },
  { id: 'laercio-fernandes', name: 'Professor Laercio Fernandes dos Santos', rating: 5, text: 'Rewarding experience', relativeDate: 'há 5 anos', avatarInitial: 'P', avatarColor: '#8844b9', source: 'Google', details: '7 avaliações · 6 fotos' },
  { id: 'gregorio-garbelotto', name: 'Gregorio Garbelotto', rating: 5, text: 'Bacana...', relativeDate: 'há 5 anos', avatarInitial: 'G', avatarColor: '#277e3c', source: 'Google', details: '4 avaliações' },
  { id: 'junior-gosch', name: 'Junior Gosch', rating: 5, text: 'Excelente.', relativeDate: 'há 6 anos', avatarInitial: 'J', avatarColor: '#bb330d', source: 'Google', details: 'Guia local · 13 avaliações · 7 fotos' },
  { id: 'cleci-mattos', name: 'Cleci Mattos', rating: 5, text: 'Ótima.', relativeDate: 'há 8 anos', avatarInitial: 'C', avatarColor: '#704ab0', source: 'Google', details: '3 avaliações' },
  { id: 'cristiano-rosa', name: 'Cristiano Rosa', rating: 5, text: 'Excelente academia.', relativeDate: 'há 7 anos', avatarInitial: 'C', avatarColor: '#3475ca', source: 'Google', details: 'Guia local · 30 avaliações' },
  { id: 'elisangela-telo', name: 'Elisangela Telo', rating: 5, text: 'Ótima academia!', relativeDate: 'há 1 semana', avatarInitial: 'E', avatarColor: '#df3d75', source: 'Google', details: '2 avaliações' },
];
export const firstRowReviews = reviews.slice(0, 12);
export const secondRowReviews = reviews.slice(12);
export const googleReviews = {
  name: 'Reforce Academia', rating: 4.8, count: 79,
  // Link oficial fornecido pelo usuário. Abre o perfil, onde se pode avaliar.
  url: 'https://www.google.com/maps/place/Reforce+Academia/@-28.2657486,-52.4375614,17z/data=!3m1!4b1!4m6!3m5!1s0x94e2c0a637abe281:0x9dfcdc58d4e94f55!8m2!3d-28.2657533!4d-52.4349865!16s%2Fg%2F11g6hw86ll?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
};
