import { useMemo } from 'react';
import globalSEO from '../data/seo/global.json';
import pagesSEO from '../data/seo/pages.json';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  robots: string;
  schema: any;
  structuredData: string;
}

export const useSEO = (pageName: string): SEOData => {
  return useMemo(() => {
    const pageData = (pagesSEO as any)[pageName] || {};
    const global = globalSEO;
    
    // Combine page-specific and global data
    const title = pageData.title || `${global.siteName}`;
    const description = pageData.description || global.siteDescription;
    const keywords = pageData.keywords || [];
    const canonical = `${global.siteUrl}${pageData.canonical || '/'}`;
    const ogImage = pageData.ogImage || global.defaultImage;
    
    // Generate structured data
    const generateStructuredData = () => {
      const baseSchema = {
        "@context": "https://schema.org",
        "@type": pageData.schema?.type || "WebPage",
        "name": title,
        "description": description,
        "url": canonical,
        "image": ogImage,
        "publisher": {
          "@type": "Organization",
          "name": global.organization.name,
          "url": global.organization.url,
          "logo": {
            "@type": "ImageObject",
            "url": `${global.siteUrl}${global.organization.logo}`
          }
        }
      };

      // Add medical organization schema for relevant pages
      if (pageName === 'home' || pageName === 'about' || pageName === 'contact') {
        return {
          "@context": "https://schema.org",
          "@graph": [
            baseSchema,
            {
              "@type": "MedicalOrganization",
              "name": global.organization.name,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": global.organization.address.streetAddress,
                "addressLocality": global.organization.address.addressLocality,
                "addressRegion": global.organization.address.addressRegion,
                "postalCode": global.organization.address.postalCode,
                "addressCountry": global.organization.address.addressCountry
              },
              "telephone": global.organization.telephone,
              "email": global.organization.email,
              "url": global.organization.url,
              "image": `${global.siteUrl}${global.organization.image}`,
              "priceRange": global.organization.priceRange,
              "paymentAccepted": global.organization.paymentAccepted,
              "currenciesAccepted": global.organization.currenciesAccepted
            },
            {
              "@type": "Person",
              "name": global.physician.name,
              "jobTitle": global.physician.jobTitle,
              "worksFor": {
                "@type": "Organization",
                "name": global.physician.worksFor
              },
              "medicalSpecialty": global.physician.medicalSpecialty,
              "alumniOf": global.physician.alumniOf.map(school => ({
                "@type": "EducationalOrganization",
                "name": school
              })),
              "memberOf": global.physician.memberOf.map(org => ({
                "@type": "Organization",
                "name": org
              })),
              "image": `${global.siteUrl}${global.physician.image}`,
              "url": `${global.siteUrl}${global.physician.url}`
            }
          ]
        };
      }

      // Add service-specific schema for service pages
      if (pageName.includes('psychiatry') || pageName.includes('therapy') || pageName.includes('services')) {
        return {
          ...baseSchema,
          "@type": "MedicalWebPage",
          "medicalAudience": {
            "@type": "Patient"
          },
          "about": {
            "@type": "MedicalCondition",
            "name": pageData.schema?.name || "Mental Health Conditions"
          }
        };
      }

      return baseSchema;
    };

    const structuredData = JSON.stringify(generateStructuredData());

    return {
      title,
      description,
      keywords,
      canonical,
      ogType: pageData.ogType || 'website',
      ogTitle: title,
      ogDescription: description,
      ogImage: `${global.siteUrl}${ogImage}`,
      ogUrl: canonical,
      twitterCard: global.socialMedia.twitter.card,
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: `${global.siteUrl}${ogImage}`,
      robots: global.defaultMeta.robots,
      schema: pageData.schema || {},
      structuredData
    };
  }, [pageName]);
};

export default useSEO;
