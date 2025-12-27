
export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  sections: {
    title: string;
    content: string;
    image: string;
    captionTitle: string;
    captionText: string;
    reverse?: boolean;
  }[];
  offerings: string[];
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
}
export interface Partner {
  name: string;
  logo: string;
}