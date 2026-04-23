function ProductList({ products }) {
    if (products.length === 0) {
        return <p className="text-sm text-slate-400">No products yet.</p>;
    }

    return (
        <div className="space-y-2">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                >
                    <span className="text-slate-700">{product.name}</span>
                    <span className="font-semibold text-slate-900">{product.price} ₺</span>
                </div>
            ))}
        </div>
    );
}

export default ProductList;