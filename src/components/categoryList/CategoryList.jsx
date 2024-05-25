import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getCategoriesData = async () => {
  const response = await fetch("http:localhost:3000/api/categories/add", {
    cache: "no-store",
  });

  if (!response.ok) {
    return new Error("Failed to load categories");
  }

  const data = await response.json();
  return data;
};

function CategoryList() {
  const data = getCategoriesData();
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

        {/* <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="img"
            width={40}
            height={40}
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="img"
            width={40}
            height={40}
            className={styles.image}
          />
          food
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="img"
            width={40}
            height={40}
            className={styles.image}
          />
          culture
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="img"
            width={40}
            height={40}
            className={styles.image}
          />
          travel
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="img"
            width={40}
            height={40}
            className={styles.image}
          />
          coding
        </Link> */}
      </div>
    </div>
  );
}

export default CategoryList;
