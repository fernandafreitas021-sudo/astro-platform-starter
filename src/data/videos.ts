import type { Video, Testimonial, SubscriptionPlan } from '../types';

export const videos: Video[] = [
    {
        id: '1',
        title: 'Meditação para Iniciantes - 10 minutos',
        description: 'Uma introdução suave à prática da meditação, perfeita para quem está começando sua jornada de autoconhecimento.',
        category: 'meditacao',
        duration: '10:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/inpok4MKVLM',
        level: 'iniciante',
        tags: ['relaxamento', 'iniciante', 'manhã'],
        createdAt: '2025-01-15'
    },
    {
        id: '2',
        title: 'Meditação Guiada para Ansiedade',
        description: 'Técnicas específicas para acalmar a mente e reduzir os sintomas de ansiedade através da meditação.',
        category: 'meditacao',
        duration: '15:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/O-6f5wQXSu8',
        level: 'intermediario',
        tags: ['ansiedade', 'calma', 'bem-estar'],
        createdAt: '2025-01-20'
    },
    {
        id: '3',
        title: 'Mindfulness no Dia a Dia',
        description: 'Aprenda a praticar atenção plena em suas atividades cotidianas e viva o presente com mais consciência.',
        category: 'mindfulness',
        duration: '12:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/6p_yaNFSYao',
        level: 'iniciante',
        tags: ['atenção plena', 'cotidiano', 'consciência'],
        createdAt: '2025-02-01'
    },
    {
        id: '4',
        title: 'Respiração Consciente - Técnica 4-7-8',
        description: 'Aprenda a técnica de respiração 4-7-8 para relaxamento profundo e melhora da qualidade do sono.',
        category: 'respiracao',
        duration: '8:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/gz4G31LGyog',
        level: 'iniciante',
        tags: ['respiração', 'sono', 'relaxamento'],
        createdAt: '2025-02-05'
    },
    {
        id: '5',
        title: 'Meditação para Dormir Profundamente',
        description: 'Uma meditação guiada especialmente desenvolvida para ajudar você a ter uma noite de sono tranquila e reparadora.',
        category: 'meditacao',
        duration: '20:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/aEqlQvczMJQ',
        level: 'iniciante',
        tags: ['sono', 'noite', 'relaxamento profundo'],
        createdAt: '2025-02-10'
    },
    {
        id: '6',
        title: 'Mindfulness para Redução de Estresse',
        description: 'Práticas de mindfulness baseadas em evidências científicas para gerenciar o estresse do dia a dia.',
        category: 'mindfulness',
        duration: '18:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/SEfs5TJZ6Nk',
        level: 'intermediario',
        tags: ['estresse', 'trabalho', 'equilíbrio'],
        createdAt: '2025-02-15'
    },
    {
        id: '7',
        title: 'Respiração Diafragmática Completa',
        description: 'Domine a técnica da respiração diafragmática para aumentar sua capacidade pulmonar e promover relaxamento.',
        category: 'respiracao',
        duration: '10:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/nM-ySWyID9o',
        level: 'intermediario',
        tags: ['respiração profunda', 'técnica', 'energia'],
        createdAt: '2025-02-20'
    },
    {
        id: '8',
        title: 'Meditação Avançada - Vipassana',
        description: 'Técnica avançada de meditação Vipassana para observação profunda da realidade e autoconhecimento.',
        category: 'meditacao',
        duration: '30:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=450&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/nOJTbWC-ULc',
        level: 'avancado',
        tags: ['vipassana', 'autoconhecimento', 'profundo'],
        createdAt: '2025-02-25'
    }
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Maria Silva',
        text: 'As meditações guiadas da Fernanda transformaram minha vida. Consegui reduzir significativamente minha ansiedade e durmo muito melhor.',
        rating: 5,
        date: '2025-01-10'
    },
    {
        id: '2',
        name: 'João Santos',
        text: 'Prático mindfulness há 6 meses com os vídeos e percebi uma melhora incrível no meu foco e produtividade no trabalho.',
        rating: 5,
        date: '2025-01-25'
    },
    {
        id: '3',
        name: 'Ana Paula',
        text: 'As técnicas de respiração consciente me ajudaram a controlar crises de ansiedade. Recomendo muito!',
        rating: 5,
        date: '2025-02-05'
    },
    {
        id: '4',
        name: 'Carlos Oliveira',
        text: 'Excelente conteúdo! A Fernanda tem uma voz muito calma e as práticas são fáceis de seguir, mesmo para iniciantes.',
        rating: 5,
        date: '2025-02-15'
    }
];

export const subscriptionPlans: SubscriptionPlan[] = [
    {
        id: 'monthly',
        name: 'Plano Mensal',
        price: 47.90,
        popular: true,
        features: [
            'Acesso ilimitado a todos os vídeos',
            'Novas meditações toda semana',
            'Biblioteca completa de mindfulness',
            'Técnicas de respiração consciente',
            'Suporte por email',
            'Cancele quando quiser'
        ]
    }
];
