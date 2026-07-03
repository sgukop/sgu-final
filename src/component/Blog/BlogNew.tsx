'use client'

import React from 'react'

// Separated title configuration mapping for easier management
const BLOG_TITLES: Record<number, string> = {
  1: 'Best MBA Colleges in Kolhapur : Choose Right Career Path',
  2: 'MCA College in Kolhapur: Complete Admission Guide for 2026',
  3: 'Best Product Designing College in Kolhapur: Key Factors to Consider',
  4: 'Why a BBA LLB College in Kolhapur is the Smart Choice for Future Corporate Lawyers',
  5: 'Why Choose B.Pharmacy After 12th? Eligibility, Fees & Future Scope',
}

const blogs = [
  {
    id: 1,
    link: 'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/preview',
    open: 'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/edit',
  },
  {
    id: 2,
    link: 'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/preview',
    open: 'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/edit',
  },
  {
    id: 3,
    link: 'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/preview',
    open: 'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/edit',
  },
  {
    id: 4,
    link: 'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/preview',
    open: 'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/edit',
  },
  {
    id: 5,
    link: 'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/preview',
    open: 'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/edit',
  },
]

export default function BlogSection9() {
  return (
    <section className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => {
            const title = BLOG_TITLES[blog.id] || `Blog Post ${blog.id}`

            return (
              <div className="col-lg-6 col-md-12 mb-4" key={blog.id}>
                <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                  
                  {/* Card Header for the Title */}
                  <div className="card-header bg-light py-3">
                    <h5 className="card-title mb-0 text-truncate" title={title}>
                      {title}
                    </h5>
                  </div>

                  {/* Document Embed */}
                  <iframe
                    src={blog.link}
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    loading="lazy"
                    title={title} // Important for accessibility
                  />

                  {/* Action Footer */}
                  <div className="card-footer bg-white text-center py-3">
                    <a
                      href={blog.open}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-100"
                    >
                      Open Full Document
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}