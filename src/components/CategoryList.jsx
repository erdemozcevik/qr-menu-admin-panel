import ProductList from "./ProductList";

function CategoryList({ category }) {
    return (
        <div className="rounded-xl border border-slate-200 p-4 shadow-sm bg-white">
            <h3 className="mb-3 text-lg font-bold text-slate-700">{category.name}</h3>
            <ProductList products={category.products} />
        </div>
    );
}

export default CategoryList;