import { Envelope, WhatsappLogo } from '@phosphor-icons/react'

export const contactTitleData = {
  title: 'Entre em contato conosco',
  subtitle: 'Estamos aqui para ajudar',
  description: 'Entre em contato com nossa equipe de especialistas para soluções personalizadas e orientações detalhadas sobre como podemos apoiar seu negócio de forma eficiente.',
}

export const contactSubitleData = {
  title: 'Mais informações',
}

export const contactCardData = [
  {
    id: 'whatsapp',
    icon: WhatsappLogo,
    title: 'Diga olá no WhatsApp!',
    description: 'Converse diretamente com nossos especialistas, tire suas dúvidas e descubra soluções sob medida para o seu negócio, tudo de forma rápida e prática.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Fale com um especialista',
      colorVariant: 'primary' as const,
    },
  },
  {
    id: 'email',
    icon: Envelope,
    title: 'Entre em contato por e-mail!',
    description: 'Envie suas questões ou solicitações para nossa equipe, e nós iremos trabalhar em uma solução personalizada, com toda a atenção e cuidado que o seu negócio merece.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Envie-nos um e-mail',
      colorVariant: 'secondary' as const,
    },
  },
]

export const contactInfoData = [
  {
    id: 'visit',
    title: 'Faça-nos uma visita',
    description: 'Visite nosso escritório e conheça nossa equipe de especialistas prontos para atender suas necessidades.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'default' as const,
    },
  },
  {
    id: 'careers',
    title: 'Carreiras na Palin&Martins',
    description: 'Junte-se à nossa equipe! Estamos sempre em busca de talentos que compartilhem da nossa visão.',
    size: 'sm' as const,
    button: {
      href: '/vagas',
      action: 'Confira as vagas',
      colorVariant: 'default' as const,
    },
  },
  {
    id: 'services',
    title: 'Nossos Serviços',
    description: 'Oferecemos soluções personalizadas para o seu negócio, focando em crescimento e inovação.',
    size: 'sm' as const,
    button: {
      href: '#',
      action: 'Saiba mais',
      colorVariant: 'default' as const,
    },
  },
]
