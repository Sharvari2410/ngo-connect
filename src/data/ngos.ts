import type { Ngo } from "@/types/ngo";

const categories = [
  "Education",
  "Health",
  "Food",
  "Animal Care",
  "Women Empowerment",
] as const;

const donationOptions = ["money", "clothes", "food", "books"] as const;

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickCategory(name: string): Ngo["category"] {
  const index = hashString(name) % categories.length;
  return categories[index];
}

function generateTransparencyScore(name: string): number {
  const base = 80;
  const range = 16; // 80–95 inclusive
  const offset = hashString(`${name}-score`) % range;
  return base + offset;
}

function pickDonationTypes(name: string): string[] {
  const hash = hashString(`${name}-donations`);
  const result: string[] = [];

  donationOptions.forEach((type, index) => {
    if ((hash >> index) & 1) {
      result.push(type);
    }
  });

  if (result.length === 0) {
    result.push("money");
  }

  return result;
}

function parseLocation(location: string): { area: string; city: string } {
  const parts = location.split(",").map((part) => part.trim());
  if (parts.length === 1) {
    return { area: parts[0], city: "Pune" };
  }

  const [first, second] = parts;
  const area = first;
  const city = second && second !== "Maharashtra" ? second : "Pune";

  return { area, city };
}

type RawNgo = {
  id: string;
  name: string;
  location: string;
  contactPhone: string;
  contactEmail?: string;
  description: string;
  needs: string[];
};

const rawNgos: RawNgo[] = [
  {
    id: "akanksha-organization",
    name: "Akanksha Organization",
    location: "Erandwane, Pune, Maharashtra",
    contactPhone: "020-66051380",
    description:
      "Provides high-quality education support to children from low-income communities through learning centres and partnerships with public schools in Pune.",
    needs: [
      "Sponsor after-school learning kits for 100 students in Erandwane.",
      "Support training sessions for volunteer teachers and mentors.",
    ],
  },
  {
    id: "bharatiya-samaj-seva-kendra",
    name: "Bharatiya Samaj Seva Kendra",
    location: "Koregaon Park, Pune, Maharashtra",
    contactPhone: "020-26159314",
    description:
      "Focuses on child protection, adoption services, and family strengthening programmes for vulnerable children in Pune and surrounding areas.",
    needs: [
      "Provide hygiene and nutrition kits for children in residential care.",
      "Fund counselling sessions for at-risk families and caregivers.",
    ],
  },
  {
    id: "chetana-mahila-vikas-kendra",
    name: "Chetana Mahila Vikas Kendra",
    location: "Pulgate, Pune, Maharashtra",
    contactPhone: "020-26354946",
    description:
      "Empowers women through self-help groups, livelihood training, and legal awareness programmes in urban and peri-urban Pune.",
    needs: [
      "Support skill-building workshops for women-led self-help groups.",
      "Provide sewing machines and raw materials for income-generation units.",
    ],
  },
  {
    id: "childrens-future-india",
    name: "Children’s Future India",
    location: "Sadashiv Peth, Pune, Maharashtra",
    contactPhone: "020-24530063",
    description:
      "Works with communities to improve health, education, and protection outcomes for children from marginalised backgrounds.",
    needs: [
      "Sponsor school bags, books, and stationery for community learning centres.",
      "Support health camps for children in low-income neighbourhoods.",
    ],
  },
  {
    id: "global-vision-ngo",
    name: "Global Vision NGO",
    location: "Camp, Pune, Maharashtra",
    contactPhone: "020-41204729",
    description:
      "Creates awareness and provides support services for patients and families affected by life-threatening illnesses.",
    needs: [
      "Contribute towards emergency medical support funds for low-income patients.",
      "Support outreach camps to increase awareness about early diagnosis.",
    ],
  },
  {
    id: "helpage-india-pune",
    name: "Helpage India",
    location: "Phule Nagar, Pune, Maharashtra",
    contactPhone: "020-20265513",
    description:
      "Supports the dignity and well-being of older persons through healthcare, livelihood, and social protection initiatives.",
    needs: [
      "Sponsor monthly medicines for elderly beneficiaries living alone.",
      "Support mobile health clinics serving senior citizens in Pune.",
    ],
  },
  {
    id: "seva-sahayog-foundation",
    name: "Seva Sahayog Foundation",
    location: "Navi Peth, Pune, Maharashtra",
    contactPhone: "020-24537655",
    description:
      "Acts as a bridge between donors and credible grassroots organisations working across education, health, and livelihoods.",
    needs: [
      "Fund logistics for distribution of school and hygiene kits in Navi Peth.",
      "Support capacity-building workshops for partner community organisations.",
    ],
  },
  {
    id: "maher",
    name: "Maher",
    location: "Hadapsar, Pune, Maharashtra",
    contactPhone: "020-26972929",
    contactEmail: "maher@maherashram.org",
    description:
      "Provides shelter, care, and rehabilitation for women, children, and men in distress through community-based homes across Maharashtra.",
    needs: [
      "Sponsor nutritious meals for residents in community homes in Hadapsar.",
      "Support counselling and rehabilitation programmes for survivors of abuse.",
    ],
  },
  {
    id: "deep-griha-society",
    name: "Deep Griha Society",
    location: "Tadiwala Road, Pune, Maharashtra",
    contactPhone: "020-26124382",
    contactEmail: "deepgriha@gmail.com",
    description:
      "Runs integrated community development programmes in health, education, and skill-building for families living in informal settlements.",
    needs: [
      "Provide learning materials for early childhood education centres.",
      "Support nutritional supplements for mothers and young children.",
    ],
  },
  {
    id: "akanksha-foundation",
    name: "Akanksha Foundation",
    location: "Wakdewadi, Pune, Maharashtra",
    contactPhone: "020-25540007",
    description:
      "Partners with government schools to deliver high-quality education and holistic development opportunities for children.",
    needs: [
      "Sponsor classroom libraries and digital learning tools.",
      "Support teacher professional development programmes in partner schools.",
    ],
  },
  {
    id: "aadhar-pratishthan-trust",
    name: "Aadhar Pratishthan Trust",
    location: "Chandan Nagar, Pune, Maharashtra",
    contactPhone: "9860133100",
    description:
      "Works with vulnerable families to improve access to education, healthcare, and social entitlements.",
    needs: [
      "Fund home-based tutoring support for first-generation learners.",
      "Support legal aid and documentation camps for community members.",
    ],
  },
  {
    id: "anthra",
    name: "Anthra",
    location: "Bavdhan, Pune, Maharashtra",
    contactPhone: "020-925551282",
    description:
      "Collaborates with rural communities to promote sustainable agriculture, animal care, and natural resource management.",
    needs: [
      "Support training for women farmers on climate-resilient practices.",
      "Fund veterinary health camps for livestock-dependent families.",
    ],
  },
  {
    id: "bal-kalyan-sanstha",
    name: "Bal Kalyan Sanstha",
    location: "Ganeshkhind Road, Pune, Maharashtra",
    contactPhone: "020-25659953",
    contactEmail: "info@balkalyansanstha.org",
    description:
      "Provides recreational, cultural, and sports opportunities for children with disabilities across Pune.",
    needs: [
      "Sponsor adaptive sports equipment and accessible learning materials.",
      "Support transportation for children with disabilities to attend sessions.",
    ],
  },
  {
    id: "shelter-associates",
    name: "Shelter Associates",
    location: "Pune, Maharashtra",
    contactPhone: "020-24440363",
    contactEmail: "info@shelter-associates.org",
    description:
      "Improves urban sanitation, housing, and basic services through data-driven planning and community partnerships.",
    needs: [
      "Support construction of household and community toilets in informal settlements.",
      "Fund mapping and data collection exercises to improve service delivery.",
    ],
  },
  {
    id: "sevavardhini",
    name: "Sevavardhini",
    location: "Pune, Maharashtra",
    contactPhone: "020-24432606",
    contactEmail: "contact@sevavardhini.org",
    description:
      "Strengthens grassroots voluntary organisations through capacity-building, networking, and donor linkages.",
    needs: [
      "Support training programmes for small and emerging NGOs.",
      "Fund technology upgrades for partner organisations’ data systems.",
    ],
  },
  {
    id: "janhvi-foundation",
    name: "Janhvi Foundation",
    location: "Pune, Maharashtra",
    contactPhone: "9822490848",
    contactEmail: "janhvifoundation@gmail.com",
    description:
      "Promotes health awareness, screening camps, and patient support services with a focus on non-communicable diseases.",
    needs: [
      "Sponsor diagnostic camps for early detection of critical illnesses.",
      "Provide patient counselling and follow-up support services.",
    ],
  },
  {
    id: "kalpavriksh",
    name: "Kalpavriksh",
    location: "Deccan Gymkhana, Pune, Maharashtra",
    contactPhone: "020-25654239",
    contactEmail: "info@kalpavriksh.org",
    description:
      "Works on environmental education, conservation, and policy advocacy with schools and communities.",
    needs: [
      "Support nature education programmes in government and low-fee schools.",
      "Fund community campaigns on biodiversity and urban green spaces.",
    ],
  },
  {
    id: "swayam-shikshan-prayog",
    name: "Swayam Shikshan Prayog",
    location: "Pune, Maharashtra",
    contactPhone: "020-24226659",
    contactEmail: "info@sspindia.org",
    description:
      "Enables women in rural and peri-urban areas to become entrepreneurs and community leaders in climate-resilient sectors.",
    needs: [
      "Provide seed capital for women-led micro-enterprises.",
      "Support leadership and financial literacy training cohorts.",
    ],
  },
  {
    id: "naam-foundation",
    name: "Naam Foundation",
    location: "Pune, Maharashtra",
    contactPhone: "020-24440000",
    contactEmail: "info@naammh.org",
    description:
      "Supports drought-affected farming families through livelihood support, water conservation, and community infrastructure projects.",
    needs: [
      "Fund farm pond and watershed development projects in drought-prone areas.",
      "Support livelihood diversification programmes for smallholder farmers.",
    ],
  },
  {
    id: "robin-hood-army-pune",
    name: "Robin Hood Army Pune",
    location: "Pune, Maharashtra",
    contactPhone: "000-0000000",
    contactEmail: "pune@robinhoodarmy.com",
    description:
      "A volunteer-driven initiative that redistributes surplus food from restaurants and homes to people experiencing hunger.",
    needs: [
      "Onboard new volunteer groups for weekly food distribution drives.",
      "Support logistics for collecting and redistributing surplus food safely.",
    ],
  },
];

const placeholderEmailDomain = "contact@placeholder.ngo-connect.in";
const placeholderImageBase = "/images/ngos";

export const ngos: Ngo[] = rawNgos.map((raw, index) => {
  const { area, city } = parseLocation(raw.location);
  const email = raw.contactEmail ?? placeholderEmailDomain;

  const imageIndex = (index % 6) + 1;

  return {
    id: raw.id,
    name: raw.name,
    city,
    area,
    category: pickCategory(raw.name),
    verified: true,
    transparencyScore: generateTransparencyScore(raw.name),
    description: raw.description,
    address: raw.location,
    contactEmail: email,
    contactPhone: raw.contactPhone,
    donationTypes: pickDonationTypes(raw.name),
    needs: raw.needs,
    images: [`${placeholderImageBase}/${raw.id}-${imageIndex}.jpg`],
  };
});

// Convenience export for UI sections that highlight a subset
export const featuredNgos: Ngo[] = ngos.slice(0, 6);

