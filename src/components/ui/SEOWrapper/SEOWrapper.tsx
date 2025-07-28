import React, { useEffect } from 'react';
import { useSEO } from '../../../hooks/useSEO';

interface SEOWrapperProps {
  pageName: string;
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({ pageName, children }) => {
  const seoData = useSEO(pageName);

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic Meta Tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords.join(', '));
    updateMetaTag('robots', seoData.robots);
    updateLinkTag('canonical', seoData.canonical);

    // Open Graph Tags
    updateMetaTag('og:type', seoData.ogType, true);
    updateMetaTag('og:title', seoData.ogTitle, true);
    updateMetaTag('og:description', seoData.ogDescription, true);
    updateMetaTag('og:image', seoData.ogImage, true);
    updateMetaTag('og:url', seoData.ogUrl, true);
    updateMetaTag('og:site_name', 'Dr. Caroline Fu, DO - Psychiatrist', true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', seoData.twitterCard);
    updateMetaTag('twitter:title', seoData.twitterTitle);
    updateMetaTag('twitter:description', seoData.twitterDescription);
    updateMetaTag('twitter:image', seoData.twitterImage);

    // Medical Practice Specific Meta Tags
    updateMetaTag('geo.region', 'US-MA');
    updateMetaTag('geo.placename', 'Cambridge');
    updateMetaTag('geo.position', '42.3736;-71.1097');
    updateMetaTag('ICBM', '42.3736, -71.1097');

    // Structured Data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = seoData.structuredData;

    // Additional Medical Practice Meta Tags for home page
    if (pageName === 'home') {
      updateMetaTag('author', 'Dr. Caroline Fu, DO');
      updateMetaTag('copyright', 'Dr. Caroline Fu, DO');
      updateMetaTag('language', 'English');
      updateMetaTag('revisit-after', '7 days');
    }

    // Chinese Language Meta Tags
    if (pageName === 'chinese') {
      updateMetaTag('language', 'Chinese');
      updateMetaTag('Content-Language', 'zh-CN');
      document.documentElement.setAttribute('lang', 'zh-CN');
    } else {
      document.documentElement.setAttribute('lang', 'en');
    }

    // Service-Specific Meta Tags
    if (pageName.includes('psychiatry') || pageName.includes('therapy')) {
      updateMetaTag('medical.condition', 'Mental Health');
      updateMetaTag('medical.specialty', 'Psychiatry');
      updateMetaTag('audience', 'Patients');
    }
  }, [seoData, pageName]);

  return <>{children}</>;
};

export default SEOWrapper;
