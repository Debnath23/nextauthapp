"use client";
import React, { useEffect, useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

function Comments() {
  const [status, setStatus] = useState("nothing");
  const [desc, setDesc] = useState("");
  const {data, mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({desc, postSlug})
    });
    mutate();
  }

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/aboutme");
      setStatus(response.data.data._id);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "nothing" ? (
        <Link href="/login">Login to write a comment</Link>
      ) : (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} onChange={(e) => setDesc(e.target.value)} />
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      )}
      <div className={styles.comments}>
        {isLoading ? (<div>Loading...</div>) : data?.map((item) => (<div className={styles.comment} key={item._id}>
          <div className={styles.user}>
            {item?.user?.image && <Image
              src={item.user.image}
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />}
            <div className={styles.userInfo}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}>{item.createdAt}</span>
            </div>
          </div>
          <p  className={styles.desc}>{item.desc}</p>
        </div>))}
      </div>
    </div>
  );
}

export default Comments;
