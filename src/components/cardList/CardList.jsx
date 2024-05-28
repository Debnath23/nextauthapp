"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const response = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load posts");
  }

  const data = await response.json();
  return data;
};

const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getData(page, cat);
        setPosts(data.posts);
        setCount(data.count);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * page < count; // Adjusted the calculation for hasNext

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={styles.posts}>
          <div className={styles.post}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Card post={post} key={post._id} />
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>
      )}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
