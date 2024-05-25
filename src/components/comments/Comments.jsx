import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.png"
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Debnath</span>
              <span className={styles.date}>23.05.24</span>
            </div>
          </div>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum dolore, ducimus error repellat beatae repudiandae nesciunt asperiores repellendus earum.</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
