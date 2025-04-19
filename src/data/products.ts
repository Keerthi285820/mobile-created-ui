
import { Category } from './categories';

export interface Product {
  id: string;
  name: string;
  generic: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
  stock: number;
  categoryId: string;
  dosage: string;
  manufacturer: string;
  requiresPrescription: boolean;
}

export const products: Product[] = [
  // Prescription Medicines
  {
    id: "med-001",
    name: "Atorvastatin 10mg",
    generic: "Atorvastatin",
    description: "Used to treat high cholesterol and to lower the risk of stroke, heart attack, or other heart complications.",
    price: 120,
    discountedPrice: 99,
    image: "/images/atorvastatin.jpg",
    stock: 50,
    categoryId: "prescription",
    dosage: "10mg",
    manufacturer: "Sun Pharmaceuticals",
    requiresPrescription: true
  },
  {
    id: "med-002",
    name: "Metformin 500mg",
    generic: "Metformin Hydrochloride",
    description: "Used to treat type 2 diabetes by improving blood sugar control.",
    price: 85,
    image: "/images/metformin.jpg",
    stock: 75,
    categoryId: "prescription",
    dosage: "500mg",
    manufacturer: "Cipla Ltd",
    requiresPrescription: true
  },
  
  // Over-the-Counter
  {
    id: "med-003",
    name: "Paracetamol 650mg",
    generic: "Acetaminophen",
    description: "Used to treat mild to moderate pain and reduce fever.",
    price: 30,
    image: "/images/paracetamol.jpg",
    stock: 100,
    categoryId: "otc",
    dosage: "650mg",
    manufacturer: "GSK Pharmaceuticals",
    requiresPrescription: false
  },
  {
    id: "med-004",
    name: "Cetirizine 10mg",
    generic: "Cetirizine Hydrochloride",
    description: "Antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching, and sneezing.",
    price: 45,
    discountedPrice: 40,
    image: "/images/cetirizine.jpg",
    stock: 85,
    categoryId: "otc",
    dosage: "10mg",
    manufacturer: "Dr. Reddy's Laboratories",
    requiresPrescription: false
  },
  
  // Ayurvedic
  {
    id: "med-005",
    name: "Ashwagandha Capsules",
    generic: "Withania Somnifera",
    description: "Helps reduce stress and anxiety, improves energy levels and concentration.",
    price: 250,
    image: "/images/ashwagandha.jpg",
    stock: 60,
    categoryId: "ayurvedic",
    dosage: "500mg",
    manufacturer: "Himalaya Wellness",
    requiresPrescription: false
  },
  {
    id: "med-006",
    name: "Triphala Tablets",
    generic: "Triphala Extract",
    description: "Helps in digestion, detoxification, and supports regular bowel movements.",
    price: 180,
    discountedPrice: 160,
    image: "/images/triphala.jpg",
    stock: 45,
    categoryId: "ayurvedic",
    dosage: "500mg",
    manufacturer: "Dabur India Ltd",
    requiresPrescription: false
  },
  
  // Vitamins & Supplements
  {
    id: "med-007",
    name: "Vitamin D3 1000IU",
    generic: "Cholecalciferol",
    description: "Supports bone health, immune function, and overall well-being.",
    price: 350,
    image: "/images/vitamind3.jpg",
    stock: 70,
    categoryId: "vitamins",
    dosage: "1000IU",
    manufacturer: "HealthKart",
    requiresPrescription: false
  },
  {
    id: "med-008",
    name: "Calcium + Vitamin D3",
    generic: "Calcium Carbonate + Vitamin D3",
    description: "Supports bone health and helps prevent calcium deficiency.",
    price: 285,
    discountedPrice: 260,
    image: "/images/calcium.jpg",
    stock: 55,
    categoryId: "vitamins",
    dosage: "500mg + 250IU",
    manufacturer: "Abbott Healthcare",
    requiresPrescription: false
  },
  
  // Wellness
  {
    id: "med-009",
    name: "Protein Powder",
    generic: "Whey Protein Isolate",
    description: "Supports muscle growth and recovery after exercise.",
    price: 1200,
    discountedPrice: 999,
    image: "/images/protein.jpg",
    stock: 40,
    categoryId: "wellness",
    dosage: "30g per serving",
    manufacturer: "MuscleBlaze",
    requiresPrescription: false
  },
  {
    id: "med-010",
    name: "Green Tea Extract",
    generic: "Camellia Sinensis Extract",
    description: "Supports metabolism and provides antioxidants.",
    price: 450,
    image: "/images/greentea.jpg",
    stock: 65,
    categoryId: "wellness",
    dosage: "500mg",
    manufacturer: "Organic India",
    requiresPrescription: false
  },
  
  // Personal Care
  {
    id: "med-011",
    name: "Medicated Shampoo",
    generic: "Ketoconazole",
    description: "Anti-dandruff shampoo that controls flaking, scaling, and itching.",
    price: 320,
    discountedPrice: 280,
    image: "/images/shampoo.jpg",
    stock: 50,
    categoryId: "personal-care",
    dosage: "100ml",
    manufacturer: "Glenmark Pharmaceuticals",
    requiresPrescription: false
  },
  {
    id: "med-012",
    name: "Facial Cleanser",
    generic: "Glycolic Acid",
    description: "Gentle cleanser that removes impurities and excess oil.",
    price: 275,
    image: "/images/cleanser.jpg",
    stock: 40,
    categoryId: "personal-care",
    dosage: "150ml",
    manufacturer: "Neutrogena",
    requiresPrescription: false
  },
  
  // Baby Care
  {
    id: "med-013",
    name: "Baby Diaper Rash Cream",
    generic: "Zinc Oxide",
    description: "Soothes and prevents diaper rash, creating a moisture barrier.",
    price: 180,
    image: "/images/diaperrash.jpg",
    stock: 35,
    categoryId: "baby-care",
    dosage: "50g",
    manufacturer: "Johnson & Johnson",
    requiresPrescription: false
  },
  {
    id: "med-014",
    name: "Baby Fever Reducer",
    generic: "Paracetamol",
    description: "Reduces fever and relieves minor aches and pains in infants and children.",
    price: 85,
    discountedPrice: 75,
    image: "/images/babyfever.jpg",
    stock: 60,
    categoryId: "baby-care",
    dosage: "100mg/ml",
    manufacturer: "Piramal Healthcare",
    requiresPrescription: false
  },
  
  // Medical Devices
  {
    id: "med-015",
    name: "Digital Blood Pressure Monitor",
    generic: "BP Monitor",
    description: "Accurately measures blood pressure and pulse rate.",
    price: 2500,
    discountedPrice: 2199,
    image: "/images/bpmonitor.jpg",
    stock: 25,
    categoryId: "medical-devices",
    dosage: "N/A",
    manufacturer: "Omron Healthcare",
    requiresPrescription: false
  },
  {
    id: "med-016",
    name: "Glucometer Kit",
    generic: "Blood Glucose Monitor",
    description: "Measures blood glucose levels with test strips and lancets included.",
    price: 1800,
    image: "/images/glucometer.jpg",
    stock: 30,
    categoryId: "medical-devices",
    dosage: "N/A",
    manufacturer: "Accu-Chek",
    requiresPrescription: false
  }
];

export const getProductsByCategoryId = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};
