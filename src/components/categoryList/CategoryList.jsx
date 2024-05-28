import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = () => {
  const data = getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
      {data.length > 0 ? (
          data.map((category) => (
            <Link
              key={category._id}
              href={`/blog?cat=${category.slug}`}
              className={`${styles.category} ${styles.style}`}
            >
              <a>
                <Image
                  src="/style.png"
                  alt="img"
                  width={40}
                  height={40}
                  className={styles.image}
                />
                {category.title}
              </a>
            </Link>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;