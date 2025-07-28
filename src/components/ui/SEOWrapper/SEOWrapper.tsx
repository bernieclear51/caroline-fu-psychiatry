import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSEO } from '../../../hooks/useSEO';

interface SEOWrapperProps {
  pageName: string;
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({ pageName, children }) => {
  const seoData = useSEO(pageName);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="robots" content={seoData.robots} />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:site_name" content="Dr. Caroline Fu, DO - Psychiatrist" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.twitterImage} />

        {/* Medical Practice Specific Meta Tags */}
        <meta name="geo.region" content="US-MA" />
        <meta name="geo.placename" content="Cambridge" />
        <meta name="geo.position" content="42.3736;-71.1097" />
        <meta name="ICBM" content="42.3736, -71.1097" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {seoData.structuredData}
        </script>

        {/* Additional Medical Practice Meta Tags */}
        {pageName === 'home' && (
          <>
            <meta name="author" content="Dr. Caroline Fu, DO" />
            <meta name="copyright" content="Dr. Caroline Fu, DO" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
          </>
        )}

        {/* Chinese Language Meta Tags */}
        {pageName === 'chinese' && (
          <>
            <meta name="language" content="Chinese" />
            <meta httpEquiv="Content-Language" content="zh-CN" />
            <html lang="zh-CN" />
          </>
        )}

        {/* Service-Specific Meta Tags */}
        {(pageName.includes('psychiatry') || pageName.includes('therapy')) && (
          <>
            <meta name="medical.condition" content="Mental Health" />
            <meta name="medical.specialty" content="Psychiatry" />
            <meta name="audience" content="Patients" />
          </>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
