import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const sampleProducts = [
    {
    productId: "P001",
    name: "iPhone 15",
    description: "Apple iPhone 15 with a 6.1-inch Super Retina XDR display and A16 Bionic chip.",
    altName: ["Apple iPhone 15", "iPhone15"],
    price: 329000,
    labeledPrice: 349000,
    category: "Smartphones",
    images: [
      "https://example.com/images/iphone-15-1.jpg",
      "https://example.com/images/iphone-15-2.jpg"
    ],
    isVisible: true,
    brandName: "Apple",
    model: "iPhone 15"
  },

  {
    productId: "P002",
    name: "Galaxy S24",
    description: "Samsung Galaxy S24 with a powerful processor, AMOLED display, and advanced camera system.",
    altName: ["Samsung S24", "Galaxy S24"],
    price: 285000,
    labeledPrice: 305000,
    category: "Smartphones",
    images: [
      "https://example.com/images/galaxy-s24-1.jpg",
      "https://example.com/images/galaxy-s24-2.jpg"
    ],
    isVisible: true,
    brandName: "Samsung",
    model: "Galaxy S24"
  },

  {
    productId: "P003",
    name: "MacBook Air M3",
    description: "Apple MacBook Air powered by the M3 chip, featuring a lightweight design and long battery life.",
    altName: ["Apple MacBook Air", "MacBook Air M3"],
    price: 425000,
    labeledPrice: 450000,
    category: "Laptops",
    images: [
      "https://example.com/images/macbook-air-m3-1.jpg",
      "https://example.com/images/macbook-air-m3-2.jpg"
    ],
    isVisible: true,
    brandName: "Apple",
    model: "MacBook Air M3"
  },

  {
    productId: "P004",
    name: "Sony WH-1000XM5",
    description: "Premium wireless headphones with industry-leading noise cancellation and high-quality sound.",
    altName: ["Sony XM5", "WH1000XM5", "Sony Wireless Headphones"],
    price: 95000,
    labeledPrice: 105000,
    category: "Headphones",
    images: [
      "https://example.com/images/sony-xm5-1.jpg",
      "https://example.com/images/sony-xm5-2.jpg"
    ],
    isVisible: true,
    brandName: "Sony",
    model: "WH-1000XM5"
  },

  {
    productId: "P005",
    name: "Apple Watch Series 10",
    description: "Apple Watch Series 10 with a sleek design, advanced health features, and fitness tracking.",
    altName: ["Apple Watch 10", "Watch Series 10"],
    price: 145000,
    labeledPrice: 160000,
    category: "Smartwatches",
    images: [
      "https://example.com/images/apple-watch-10-1.jpg",
      "https://example.com/images/apple-watch-10-2.jpg"
    ],
    isVisible: true,
    brandName: "Apple",
    model: "Watch Series 10"
  }
];


export default function AdminProductsPage(){
    const [products, setProducts] = useState(sampleProducts);
    return(
        <div className="w-full h-full overflow-y-scroll "> 
         
            <h1 className="text-center text-2xl font-bold p-[10px] border-b-4 border-white sticky top-0 bg-white">Products Management</h1>
            <Link to="/admin/add-product" className="flex items-center gap-2 bg-amber-500 text-white p-2 mt-20 rounded-md hover:bg-amber-600 fixed bottom-10 right-15">
           
                <FaPlus /> 
            </Link>
            {
                products.map(
                    (item, index)=>{
                        
                        return <h1 key={index}>{item.name}</h1>
                    }
                )
            }
            
        </div>
    )
}