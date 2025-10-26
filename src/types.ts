export type BlobParameterProps = {
    seed: number;
    size: number;
    edges: number;
    growth: number;
    name: string;
    colors: string[];
};

export type BlobProps = {
    svgPath: string;
    parameters: BlobParameterProps;
};

// User and Authentication Types
export type User = {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    subscriptionStatus: 'active' | 'inactive' | 'trial';
    subscriptionEndDate?: string;
};

export type Session = {
    userId: string;
    token: string;
    expiresAt: string;
};

// Video and Content Types
export type VideoCategory = 'meditacao' | 'mindfulness' | 'respiracao';

export type Video = {
    id: string;
    title: string;
    description: string;
    category: VideoCategory;
    duration: string;
    thumbnailUrl: string;
    videoUrl: string;
    level: 'iniciante' | 'intermediario' | 'avancado';
    tags: string[];
    createdAt: string;
};

export type Testimonial = {
    id: string;
    name: string;
    text: string;
    rating: number;
    date: string;
};

export type SubscriptionPlan = {
    id: string;
    name: string;
    price: number;
    features: string[];
    popular?: boolean;
};
