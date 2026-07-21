// component/Footer.jsx
//
// NOTE: This is a placeholder footer for preview purposes only.
// Since you already have a Footer component on your live site, delete this
// file and instead import your existing Footer into app/blog/page.jsx, e.g.:
//   import Footer from "@/components/Footer";  // your existing component
//
import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Campus Life", href: "/life" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "Programs", href: "/programs" },
      { label: "Enquiry", href: "/admission-enquiry" },
      { label: "Prospectus", href: "/prospectus" },
      { label: "Contact Admission", href: "/contact-admission" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Public Disclosure", href: "/public-disclosure" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
      { label: "Media", href: "/media" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <span className={styles.logoMark}>SGU</span>
          <p className={styles.tagline}>
            Sanjay Ghodawat University, Atigre 416 118, Kolhapur
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className={styles.linkCol}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
