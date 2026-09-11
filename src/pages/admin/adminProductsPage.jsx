import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../../utils/price-format";

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
            
            
            {
                products.map(
                    (item, index)=>{
                        
                        //return <h1 key={index}>{item.productId}</h1>
                    }
                )
            }
            <div className="w-full overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-lg">

  {/* Header */}
  <div className="flex items-center justify-between border-b border-secondary/10 bg-primary px-6 py-4">
    <div>
      <h2 className="text-xl font-bold text-secondary">
        Products
      </h2>
      <p className="mt-1 text-sm text-secondary/60">
        Manage your products and their visibility
      </p>
    </div>

    <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">
      {products.length} Products
    </span>
  </div>

  {/* Vertical Scroll Only */}
  <div className="max-h-[600px] overflow-y-auto">
    <table className="w-full text-left">

      <thead className="sticky top-0 z-10 bg-gray-50">
        <tr className="border-b border-secondary/10">
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Product ID
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Product
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Price
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Labeled Price
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Category
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Image
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Status
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Brand
          </th>
          <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-secondary/70">
            Model
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-secondary/10">
        {products.map((item) => (
          <tr
            key={item.productId}
            className="group transition-colors  hover:bg-primary/40"
          >
            <td className="px-5 py-4">
              {item.productId}
            </td>

            <td className="px-5 py-4 font-semibold text-secondary">
              {item.name}
            </td>

            <td className="px-5 py-4 font-bold text-secondary">
              LKR{getFormattedPrice(item.price)}
            </td>

            <td className="px-5 py-4 text-secondary/60 line-through">
              LKR{getFormattedPrice(item.labeledPrice)}
            </td>

            <td className="px-5 py-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {item.category}
              </span>
            </td>

            <td className="px-5 py-4">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
            </td>

            <td className="px-5 py-4">
              {item.isVisible ? (
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  ● Visible
                </span>
              ) : (
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
                  ● Hidden
                </span>
              )}
            </td>

            <td className="px-5 py-4 font-medium text-secondary">
              {item.brand}
            </td>

            <td className="px-5 py-4 text-secondary/70">
              {item.model}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>
            <Link to="/admin/add-product" className="flex items-center gap-2 bg-amber-500 text-white p-2 mt-20 rounded-md hover:bg-amber-600 fixed bottom-10 right-15">
           
                <FaPlus /> 
                </Link>
            
        </div>
    )
}