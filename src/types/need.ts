export type Need = {
  id: string;
  ngoName: string;
  city: string;
  title: string;
  type: "donation" | "volunteer";
  urgency: "low" | "medium" | "high";
  description: string;
};

