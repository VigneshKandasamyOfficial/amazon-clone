import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import TopBar from "./TopBar";

const Products = () => {
  const [list, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setList(json);
        setProductList(json);
      })
      .catch();
  }, []);

  const Category1 = list.map((item) => item.category);
  const category = [...new Set(Category1)];

  useEffect(() => {
    let filteredList = list;

    if (selectedCategory) {
      filteredList = filteredList.filter(
        (obj) => obj.category === selectedCategory
      );
    }

    if (searchTerm) {
      filteredList = filteredList.filter((obj) =>
        obj.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProductList(filteredList);
  }, [selectedCategory, searchTerm, list]);

  return (
    <>
      <TopBar
        category={category}
        setSelectedCategory={setSelectedCategory}
        setSearchTerm={setSearchTerm}
      />
      <div>
        <h1>Products</h1>
      </div>
      <div className="row">
        {productList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};
export default Products;
