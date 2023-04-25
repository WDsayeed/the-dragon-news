import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCard from "../../LeftSideCard/LeftSideCard";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>All Categories</h3>
      <div className="p-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <LeftSideCard></LeftSideCard>
    </div>
  );
};

export default LeftNav;
