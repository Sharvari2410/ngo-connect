import type { Need } from "@/types/need";

export const sampleNeeds: Need[] = [
  {
    id: "n1",
    ngoName: "Pune Care Foundation",
    city: "Pune",
    title: "Need 50 blankets for winter drive",
    type: "donation",
    urgency: "high",
    description:
      "Collecting warm blankets for families in informal settlements around Kothrud and Warje.",
  },
  {
    id: "n2",
    ngoName: "Green Pune Collective",
    city: "Pune",
    title: "Volunteers needed this Sunday for river clean-up",
    type: "volunteer",
    urgency: "medium",
    description:
      "Join a half-day clean-up along the Mula-Mutha riverbank. All safety gear and refreshments provided.",
  },
  {
    id: "n3",
    ngoName: "Maharashtra Rural Upliftment Trust",
    city: "Satara",
    title: "Support digital literacy kits for 30 students",
    type: "donation",
    urgency: "medium",
    description:
      "Raising funds for refurbished devices and connectivity support for students in rural Maharashtra.",
  },
];

