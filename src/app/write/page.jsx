"use client";
import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function page() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // Add a category
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="img" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="img" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="img" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="img" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default page;
