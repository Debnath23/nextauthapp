"use client";
import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/posts/${slug}?popular=true`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load posts");
  }

  const data = await response.json();
  return data;
};

const page = ({params}) => {
  const {slug} = params;
  const data = getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (<div className={styles.userImageContainer}><Image src={data.user.image} alt="img" fill className={styles.avatar} /></div>)}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}> {data?.ucreatedAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (<div className={styles.imageContainer}>
          <Image src={data.img} alt="img" fill className={styles.image} />
        </div>)}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}} />
          <div className={styles.comment}>
          <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default page;
