// components/Header.jsx
//
// NOTE: This is a placeholder header for preview purposes only.
// Since you already have a Header component on your live site, delete this
// file and instead import your existing Header into app/blog/page.jsx, e.g.:
//   import Header from "@/components/Header";  // your existing component
//
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-university" },
  { label: "Admissions", href: "/admission-open" },
  
  { label: "Life @Campus", href: "/about-campus" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>8:30am - 6:30pm, Mon - Sun</span>
          <span>1800 31300 1566</span>
          <Link href="/admission-enquiry" className={styles.topBarCta}>
            Enquiry Form
          </Link>
        </div>
      </div>

      <div className={styles.mainBar}>
        <Link href="/" className={styles.logo}>
          {/* Replace with your actual logo asset */}
          <span className={styles.logoMark}>SGU</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
