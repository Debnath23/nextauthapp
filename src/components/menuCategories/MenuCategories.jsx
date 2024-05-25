import React from "react";
import styles from "./menuCategories.module.css"
import Link from "next/link";

function MenuCategories() {
  return (
    <div className={styles.container}>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          style
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          food
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          culture
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          travel
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          coding
        </Link>
      </div>
    </div>
  );
}

export default MenuCategories;
