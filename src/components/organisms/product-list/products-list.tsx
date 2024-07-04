import useProducts from "../../../hooks/useProducts";

export default function ProductsList() {
    const { products } = useProducts();
    
    return (
        <div>
            {products.map(product => (
                <div key={product.code}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}