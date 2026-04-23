import CategoryList from "./CategoryList";

function MenuView({ menu }) {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-slate-800">Menu</h2>
            <div className="space-y-4">
                {menu.map((category) => (
                    <CategoryList key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
}

export default MenuView;