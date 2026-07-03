'use client'

import React from 'react'

// Corrected the array variable name to 'blogs' to match the mapping logic below
const blogs = [
  {
    id: 1,
    preview:
      'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/preview',
    open:
      'https://docs.google.com/document/d/1nEYnnat6IHvQP_sFVxHVu0kOkZr5uvOBBMfjDrTgxxQ/edit',
  },
  {
    id: 2,
    preview:
      'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/preview',
    open:
      'https://docs.google.com/document/d/1pfgEkytC1RmZwqbPZTouuj1olSEd4f-9TY_-mQpImjc/edit',
  },
  {
    id: 3,
    preview:
      'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/preview',
    open:
      'https://docs.google.com/document/d/142y431-ZdRoTwZiTroZgg4fInLcFgCJszxHvd81Rffk/edit',
  },
  {
    id: 4,
    preview:
      'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/preview',
    open:
      'https://docs.google.com/document/d/1e1BbgzCoj03KFn9WjtmxIHUg_PpvIUy567Vgo7myDNo/edit',
  },
  {
    id: 5,
    preview:
      'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/preview',
    open:
      'https://docs.google.com/document/d/1LJWdDc7Ec-QTNeWze1k25YO-fI078EgKPUzgZFtC3W8/edit',
  },
]

const BlogNew = () => {
  return (
    <section className="pt-60 pb-60">
      <div className="container">
        {/* Main Title */}
        <div
          className="mb-5"
          style={{
            borderBottom: '1px solid rgba(23,22,28,0.14)',
          }}
        >
          <h2
            className="tl-section-title tl-10-section-title"
            style={{ paddingBottom: '10px' }}
          >
            Latest Blogs
          </h2>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-6 col-md-12 mb-4" key={blog.id}>
              <div
                className="card shadow-sm border-0 rounded-3 overflow-hidden"
                style={{ background: '#fff' }}
              >
                <iframe
                  src={blog.preview}
                  title={`Blog ${blog.id}`}
                  width="100%"
                  height="500"
                  style={{ border: 'none' }}
                  loading="lazy"
                />

                <div className="card-footer bg-white text-center">
                  <a
                    href={blog.open}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open Full Blog
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogNew