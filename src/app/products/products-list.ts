import {Products} from './products.model';

export const PRODUCTS: Products[] = [
  {
    productId: 1,
    name: "Agarbathi 001",
    displayName: "Ambica Darbar Agarbathi",
    brand: "Ambica Darbar",
    description: "Description for Ambica Darbar Agarbathi",
    imagePath: "../../assets/images/san diego beach.jpg",
    productUses: "Testing!",
    sizes: ["100grams", "250grams"],
    mrp: 100,
    discountInRs: 10,
    discountInPercent: 0,
    finalPrice: 90,
    tags: ["agarbathi", "tag1", "tag2"]
  },
  {
    productId: 2,
    name: "Agarbathi 002",
    displayName: "Cycle Brand Agarbathi",
    brand: "Cycle",
    description: "Description for  Agarbathi",
    imagePath: "../../assets/images/lower antelope canyon.jpg",
    productUses: "Testing123!",
    sizes: ["100grams", "250grams"],
    mrp: 200,
    discountInRs: 10,
    discountInPercent: 0,
    finalPrice: 190,
    tags: ["agarbathi", "tag1", "tag2"]
  },
  {
    productId: 3,
    name: "Agarbathi 003",
    displayName: "Banglore Agarbathi",
    brand: "Test",
    description: "Description for Banglore Agarbathi",
    imagePath: "../../assets/images/me.jpg",
    productUses: "Testing!",
    sizes: ["100grams", "250grams"],
    mrp: 300,
    discountInRs: 0,
    discountInPercent: 5,
    finalPrice: 270,
    tags: ["agarbathi", "tag1", "tag2"]
  }
];