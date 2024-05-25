import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";

function MenuPosts({ withImage }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="img" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            voluptatibus?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Debnath</span>
            <span className={styles.date}> 23.05.24</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="img" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            voluptatibus?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Debnath</span>
            <span className={styles.date}> 23.05.24</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="img" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            voluptatibus?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Debnath</span>
            <span className={styles.date}> 23.05.24</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
