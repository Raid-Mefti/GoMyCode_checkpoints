export default function todoList() {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard product={product} key={product._id} />
            ))}
        </div>
    );
}
