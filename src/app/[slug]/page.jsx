import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Debnath Mahapatra</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.png" alt="img" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Debnath</span>
              <span className={styles.date}> 23.05.24</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.png" alt="img" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae minima quae numquam minus expedita deserunt consectetur
              quibusdam quis, fugiat similique est tempore sed dignissimos
              accusamus modi voluptatum blanditiis molestiae obcaecati. Tenetur
              quibusdam eaque, quae amet corrupti sequi animi laudantium neque.
              Recusandae dicta officia vero hic, facere et ipsum accusantium
              minus.
            </p>

            <h3>Lorem ipsum dolor sit amet.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae minima quae numquam minus expedita deserunt consectetur
              quibusdam quis, fugiat similique est tempore sed dignissimos
              accusamus modi voluptatum blanditiis molestiae obcaecati. Tenetur
              quibusdam eaque, quae amet corrupti sequi animi laudantium neque.
              Recusandae dicta officia vero hic, facere et ipsum accusantium
              minus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae minima quae numquam minus expedita deserunt consectetur
              quibusdam quis, fugiat similique est tempore sed dignissimos
              accusamus modi voluptatum blanditiis molestiae obcaecati. Tenetur
              quibusdam eaque, quae amet corrupti sequi animi laudantium neque.
              Recusandae dicta officia vero hic, facere et ipsum accusantium
              minus.
            </p>
          </div>
          <div className={styles.comment}>
          <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default page;
