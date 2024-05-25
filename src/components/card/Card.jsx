import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.png" alt="img" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>22.05.24</span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, hic
          enim! Dignissimos atque neque ad omnis ipsa aperiam libero in!
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
