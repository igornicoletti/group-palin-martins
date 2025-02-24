import { ChartBar, CurrencyCircleDollar, Receipt, Scales, ShieldCheck } from '@phosphor-icons/react'


export const servicesTitleData = {
  title
    : 'Soluções Estratégicas em Tributação e Compliance',
  size: 'lg' as const,
  /* description: 'Cada segmento tem desafios e necessidades específicas. Por isso, oferecemos consultoria especializada e soluções tributárias personalizadas para otimizar sua gestão fiscal e impulsionar o crescimento do seu negócio.', */
}

export const serviceData = [
  {
    id: 'consultoria-tributaria',
    icon: ChartBar,
    title: 'Consultoria Tributária',
    description: 'Conte com nossa expertise para uma gestão tributária eficiente e segura. Identificamos oportunidades para reduzir encargos fiscais e garantir a conformidade da sua empresa com a legislação vigente.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'secondary' as const,
    },
  },
  {
    id: 'recuperacao-tributos-federais',
    icon: Receipt,
    title: 'Recuperação de Tributos Federais',
    description: 'Recupere impostos pagos a mais e aumente sua lucratividade. Identificamos tributos federais pagos indevidamente e auxiliamos na recuperação desses valores, garantindo que sua empresa aproveite todos os benefícios fiscais disponíveis.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'secondary' as const,
    },
  },
  {
    id: 'recuperacao-creditos-icms',
    icon: CurrencyCircleDollar,
    title: 'Recuperação de Créditos de ICMS',
    description: 'Realizamos uma análise detalhada das operações fiscais da sua empresa para identificar e recuperar créditos de ICMS, assegurando o correto aproveitamento de benefícios fiscais e melhorando a saúde financeira do seu negócio.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'secondary' as const,
    },
  },
  {
    id: 'compliance-tributario',
    icon: ShieldCheck,
    title: 'Compliance Tributário',
    description: 'Implementamos processos para garantir que sua empresa esteja sempre alinhada às exigências fiscais, evitando riscos, multas e penalidades. Reduza incertezas e atue com tranquilidade no mercado.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'secondary' as const,
    },
  },
  {
    id: 'servicos-juridicos',
    icon: Scales,
    title: 'Serviços Jurídicos',
    description: 'Nossa equipe especializada oferece assessoria jurídica em questões tributárias, societárias e empresariais, proporcionando segurança e soluções eficientes para sua empresa.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Fale conosco',
      colorVariant: 'secondary' as const,
    },
  },
]
