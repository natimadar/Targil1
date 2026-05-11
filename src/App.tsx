

type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{product.name}</h2>
      <p>מחיר: {product.price} ש"ח</p>
      <p>{product.inStock ? "במלאי ✅" : "אזל מהמלאי ❌"}</p>
    </div>
  );
}

export default function App() {
  const products: Product[] = [
    { name: "Laptop", price: 3000, inStock: true },
    { name: "Phone", price: 2000, inStock: false },
    { name: "Headphones", price: 400, inStock: true },
    { name: "Headphones", price: 18, inStock: true },
    { name: "Headphones", price: 180000, inStock: true },
  ];

  return (
    <div>
      <h1>רשימת מוצרים</h1>

      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
