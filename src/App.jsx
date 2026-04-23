import { useState } from "react";
import Header from "./components/Header";
import MenuView from "./components/MenuView";
import AdminPanel from "./components/AdminPanel";
import { initialMenu } from "./data/menuData";

function App() {
  const [menu, setMenu] = useState(initialMenu);

  const addCategory = (categoryName) => {
    if (!categoryName.trim()) return;

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      products: [],
    };

    setMenu((prev) => [...prev, newCategory]);
  };

  const addProduct = (categoryId, productName, price) => {
    if (!productName.trim() || !price) return;

    setMenu((prev) =>
      prev.map((category) =>
        category.id === Number(categoryId)
          ? {
            ...category,
            products: [
              ...category.products,
              {
                id: Date.now(),
                name: productName,
                price: Number(price),
              },
            ],
          }
          : category
      )
    );
  };

  const deleteProduct = (categoryId, productId) => {
    setMenu((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
            ...category,
            products: category.products.filter(
              (product) => product.id !== productId
            ),
          }
          : category
      )
    );
  };

  const updateProductPrice = (categoryId, productId, newPrice) => {
    if (!newPrice) return;

    setMenu((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
            ...category,
            products: category.products.map((product) =>
              product.id === productId
                ? { ...product, price: Number(newPrice) }
                : product
            ),
          }
          : category
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-2">
        <MenuView menu={menu} />
        <AdminPanel
          menu={menu}
          addCategory={addCategory}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          updateProductPrice={updateProductPrice}
        />
      </main>
    </div>
  );
}

export default App;