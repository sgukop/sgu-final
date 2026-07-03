// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sgischool.in/blog/",
        "url": "https://sgischool.in/blog/",
        "name": "Latest Educational Updates & News | SGIS Blog",
        "description": "Explore latest news, events, and educational insights from Sanjay Ghodawat International School.",
        "breadcrumb": { "@id": "https://sgischool.in/blog/#breadcrumb" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sgischool.in/blog/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sgischool.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>Latest Educational Updates & News | SGIS Blog</title>
      <meta name="description" content="Explore latest news, events, and educational insights from Sanjay Ghodawat International School. Stay updated with institutional updates and educational highlights." />
      <link rel="canonical" href="https://sgischool.in/blog/" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Latest Educational Updates & News | SGIS Blog" />
      <meta property="og:description" content="Explore latest news, events, and educational insights from Sanjay Ghodawat International School." />
      <meta property="og:url" content="https://sgischool.in/blog/" />
      <meta property="og:site_name" content="Sanjay Ghodawat International School" />
      <meta property="og:image" content="https://sgischool.in/wp-content/uploads/2025/09/gala-event.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="2 minutes" />

      {/* FontAwesome & Google Fonts */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;