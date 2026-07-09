// app/blog/page.jsx
"use client";

import { useMemo, useState } from "react";
import Header from "@/component/Header"; // swap for your existing Header
import Footer from "@/component/Footer"; // swap for your existing Footer
import BlogCard from "@/component/BlogCard";
import Pagination from "@/component/Pagination";
import blogPosts from "@/data/blogPosts";
import styles from "./page.module.css";

const COLUMNS = 3;
const ROWS_PER_PAGE = 3;
const POSTS_PER_PAGE = COLUMNS * ROWS_PER_PAGE; // 9 posts per page

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const visiblePosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return blogPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll back to top of the grid on page change
    document
      .getElementById("blog-grid-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container} id="blog-grid-top">
          <h1 className={styles.heading}>Blogs</h1>

          <div className={styles.grid}>
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
