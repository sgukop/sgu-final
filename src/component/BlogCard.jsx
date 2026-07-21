// components/BlogCard.jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";



export default function BlogCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.date}>{post.date}</p>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <Link href={`blog/${post.slug}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  );
}
