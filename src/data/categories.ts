
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "prescription",
    name: "Prescription Medicines",
    description: "Medicines that require a doctor's prescription",
    image: "/images/prescription.jpg"
  },
  {
    id: "otc",
    name: "Over-the-Counter",
    description: "Medicines available without a prescription",
    image: "/images/otc.jpg"
  },
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    description: "Traditional Indian medicines",
    image: "/images/ayurvedic.jpg"
  },
  {
    id: "vitamins",
    name: "Vitamins & Supplements",
    description: "Nutritional supplements and vitamins",
    image: "/images/vitamins.jpg"
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Products for general health and wellness",
    image: "/images/wellness.jpg"
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Products for personal hygiene and care",
    image: "/images/personal-care.jpg"
  },
  {
    id: "baby-care",
    name: "Baby Care",
    description: "Products for baby health and care",
    image: "/images/baby-care.jpg"
  },
  {
    id: "medical-devices",
    name: "Medical Devices",
    description: "Healthcare devices and equipment",
    image: "/images/medical-devices.jpg"
  }
];
