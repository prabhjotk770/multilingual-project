import iphone15 from "../assets/iphone15.webp";
import iphone16 from "../assets/iphone16.webp";
import iphone17 from "../assets/iphone17.webp";
import ipad from "../assets/ipad.webp";
import appleWatch from "../assets/appleWatch.webp";
import airpods from "../assets/airpods.jpg";
import macbookPro from "../assets/macbookPro.jpg";

export const PRODUCTS = [
  { id: 1, titleKey: "products.iphone15", price: "$999", image: iphone15 },
  { id: 2, titleKey: "products.macbookPro", price: "$1999", image: macbookPro },
  { id: 3, titleKey: "products.airpodsPro", price: "$249", image: airpods },
  { id: 4, titleKey: "products.appleWatch", price: "$399", image: appleWatch },
  { id: 5, titleKey: "products.ipad", price: "$599", image: ipad },
  { id: 6, titleKey: "products.iphone16", price: "$999", image: iphone16 },
  { id: 7, titleKey: "products.iphone17", price: "$999", image: iphone17 }
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 300);
  });
};
