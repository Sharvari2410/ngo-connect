export interface Ngo {
  id: string;
  name: string;
  city: string;
  area: string;
  category: "Education" | "Health" | "Food" | "Animal Care" | "Women Empowerment";
  verified: boolean;
  transparencyScore: number;
  description: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  donationTypes: string[];
  needs: string[];
  images: string[];
}

