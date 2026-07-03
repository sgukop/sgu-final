import Link from "next/link";
import React from "react";

// 1. Data array containing IDs, Titles, and Google Doc links
const blogData = [
  {
    id: 1,
    title: "Best MBA Colleges in Kolhapur : Choose Right Career Path",
    preview: 'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/preview?rm=minimal',
    open: 'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/edit',
  },
  {
    id: 2,
    title: "MCA College in Kolhapur: Complete Admission Guide for 2026",
    preview: 'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/preview?rm=minimal',
    open: 'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/edit',
  },
  {
    id: 3,
    title: "Best Product Designing College in Kolhapur: Key Factors to Consider",
    preview: 'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/preview?rm=minimal',
    open: 'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/edit',
  },
  {
    id: 4,
    title: "Why a BBA LLB College in Kolhapur is the Smart Choice for Future Corporate Lawyers",
    preview: 'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/preview?rm=minimal',
    open: 'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/edit',
  },
  {
    id: 5,
    title: "Why Choose B.Pharmacy After 12th? Eligibility, Fees & Future Scope",
    preview: 'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/preview?rm=minimal',
    open: 'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/edit',
  },
];

const Blogs = () => {
  return (
    <section className="pt-60 pb-60">
      <div className="container">
        
        {/* Main Title - UPDATED CENTER ALIGNMENT */}
        <div
          className="mb-5 d-flex justify-content-center text-center"
          style={{
            borderBottom: '1px solid rgba(23,22,28,0.14)',
          }}
        >
          <h2 className="tl-9-section-title mb-50">Blogs</h2>
        </div>

        <div className="row">
          {blogData.map((blog) => (
            <div className="col-lg-6 col-md-12 mb-4" key={blog.id}>
              <div
                className="card shadow-sm border-0 rounded-3 overflow-hidden"
                style={{ background: '#fff' }}
              >
                {/* CARD HEADER - Displays the Blog Title */}
                <div className="card-header bg-white pt-4 pb-2 px-4 border-0">
                  <h3 className="h5 text-dark fw-bold mb-0 text-truncate">
                    {blog.title}
                  </h3>
                </div>

                {/* Blog Content Preview */}
                <iframe
                  src={blog.preview}
                  title={blog.title}
                  width="100%"
                  height="500"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  loading="lazy"
                />

                {/* Card Footer - CENTERED BUTTON */}
                <div className="card-footer bg-white d-flex justify-content-center align-items-center py-3">
                  <Link
                    href={blog.open}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mx-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;