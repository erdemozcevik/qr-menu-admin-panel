import { useState } from "react";

function AdminPanel({
    menu,
    addCategory,
    addProduct,
    deleteProduct,
    updateProductPrice,
}) {
    const [categoryName, setCategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState(menu[0]?.id || "");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");

    return (
        <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-slate-800">Admin Panel</h2>

            <div className="mb-6 rounded-xl border border-slate-200 p-4">
                <h3 className="mb-3 font-semibold text-slate-700">Add Category</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Category name"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <button
                        className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700 transition"
                        onClick={() => {
                            addCategory(categoryName);
                            setCategoryName("");
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="mb-6 rounded-xl border border-slate-200 p-4">
                <h3 className="mb-3 font-semibold text-slate-700">Add Product</h3>
                <div className="space-y-3">
                    <select
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none"
                        value={selectedCategoryId}
                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                    >
                        {menu.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Product name"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button
                        className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500 transition"
                        onClick={() => {
                            addProduct(selectedCategoryId, productName, price);
                            setProductName("");
                            setPrice("");
                        }}
                    >
                        Add Product
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {menu.map((category) => (
                    <div key={category.id} className="rounded-xl border border-slate-200 p-4">
                        <h3 className="mb-3 font-semibold text-slate-700">{category.name}</h3>

                        <div className="space-y-2">
                            {category.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="rounded-lg bg-slate-50 p-3"
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="font-medium text-slate-700">
                                            {product.name} - {product.price} ₺
                                        </span>
                                        <button
                                            className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-400 transition"
                                            onClick={() => deleteProduct(category.id, product.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>

                                    <input
                                        type="number"
                                        placeholder="New price and press Enter"
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateProductPrice(
                                                    category.id,
                                                    product.id,
                                                    e.currentTarget.value
                                                );
                                                e.currentTarget.value = "";
                                            }
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AdminPanel;