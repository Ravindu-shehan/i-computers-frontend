import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (loading) {
            axios.get(import.meta.env.VITE_API_URL + "/products")
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Failed to fetch products. Please try again.");
                    setLoading(false);
                });
        }

    }, [loading]);

    return (
        <div>
            {products.map((item) => {
                return (
                    <div key={item._id || item.id}>
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
}