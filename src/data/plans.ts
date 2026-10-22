import { CalendarDays, CalendarCheck, Clock3, Dumbbell, UsersRound } from 'lucide-react';
export const plans = [
  { name: 'Mensal', price: '129,90', description: 'Acesso completo', icon: CalendarDays },
  { name: 'Dupla', price: '119,90', description: 'Treine com um amigo', icon: UsersRound },
  { name: 'Horário específico', price: '99,90', description: 'Mais economia', icon: Clock3 },
  { name: '3x por semana', price: '109,90', description: 'Flexibilidade para a sua rotina', icon: CalendarCheck },
  { name: '2x por semana', price: '99,90', description: 'Ideal para começar', icon: CalendarCheck },
  { name: 'Trimestral', price: '109,90', description: 'Mais por menos', icon: CalendarDays },
  { name: 'Semestral', price: '104,90', description: 'Evolução contínua', icon: CalendarDays },
  { name: 'Anual', price: '99,90', description: 'Melhor custo-benefício', icon: CalendarDays },
  { name: 'Diária', price: '25,00', description: 'Treino avulso', icon: Dumbbell },
];
export type Plan = (typeof plans)[number];
