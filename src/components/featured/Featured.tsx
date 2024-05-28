import React from "react";
import styles from "./featured.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Spread Your Knowledge & Creativity</h1>
        </div>
        <div className={styles.subtitleWrapper}>
          <p className={styles.subtitle}>
            Create a blog that helps our community
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/write">
            <motion.div
              className={styles.button}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <p className={styles.buttonText}>Create Your Blog</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
