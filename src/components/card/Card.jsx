import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ key, post }) {
  return (
    <div className={styles.container} key={key}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="img" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}> {post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc.substring(0, 10)}</p>
        <Link href={`/posts/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
