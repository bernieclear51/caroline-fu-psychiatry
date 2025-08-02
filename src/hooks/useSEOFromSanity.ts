import { useEffect, useState } from 'react';
import { sanityFetch } from '../sanity/queries';

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
  loading: boolean;
  error: Error | null;
}

export const useSEOFromSanity = (pageName: string): SEOData => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: '',
    description: '',
    keywords: [],
    canonical: '',
    ogType: 'website',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    robots: 'index, follow',
    schema: {},
    structuredData: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        // Fetch both page-specific SEO and global settings
        const [pageSEO, globalSettings] = await Promise.all([
          sanityFetch.getSEOByPageName(pageName),
          sanityFetch.getGlobalSettings(),
        ]);

        if (!globalSettings) {
          throw new Error('Global settings not found in Sanity');
        }

        // Use page-specific data if available, otherwise fall back to defaults
        const title = pageSEO?.title || 
          globalSettings.defaultMetaTitle?.replace('{page}', pageName) || 
          globalSettings.siteName;
          
        const description = pageSEO?.description || 
          globalSettings.defaultMetaDescription || 
          globalSettings.siteDescription;
          
        const keywords = pageSEO?.keywords || globalSettings.defaultKeywords || [];
        
        const canonical = pageSEO?.canonicalUrl || 
          `${globalSettings.siteUrl}${pageSEO?.pageSlug || '/'}`;
          
        const ogImage = pageSEO?.ogImageUrl || 
          globalSettings.defaultImageUrl || 
          '';
          
        const robots = pageSEO?.noIndex 
          ? 'noindex, nofollow' 
          : globalSettings.robots || 'index, follow';

        // Generate structured data
        const structuredData = generateStructuredData({
          pageName,
          pageSEO,
          globalSettings,
          title,
          description,
          canonical,
          ogImage,
        });

        setSeoData({
          title,
          description,
          keywords,
          canonical,
          ogType: pageSEO?.ogType || 'website',
          ogTitle: pageSEO?.ogTitle || title,
          ogDescription: pageSEO?.ogDescription || description,
          ogImage,
          ogUrl: canonical,
          twitterCard: pageSEO?.twitterCard || globalSettings.twitterCardType || 'summary_large_image',
          twitterTitle: pageSEO?.twitterTitle || pageSEO?.ogTitle || title,
          twitterDescription: pageSEO?.twitterDescription || pageSEO?.ogDescription || description,
          twitterImage: pageSEO?.twitterImageUrl || ogImage,
          robots,
          schema: pageSEO?.schema || {},
          structuredData: pageSEO?.structuredData || structuredData,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching SEO data from Sanity:', error);
        setSeoData(prev => ({
          ...prev,
          loading: false,
          error: error as Error,
        }));
      }
    };

    fetchSEOData();
  }, [pageName]);

  return seoData;
};

// Helper function to generate structured data
function generateStructuredData({
  pageName,
  pageSEO,
  globalSettings,
  title,
  description,
  canonical,
  ogImage,
}: any): string {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": pageSEO?.schema?.type || "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "image": ogImage,
    "publisher": {
      "@type": "Organization",
      "name": globalSettings.organizationName,
      "url": globalSettings.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": globalSettings.defaultImageUrl || `${globalSettings.siteUrl}/logo.png`
      }
    }
  };

  // Add medical organization schema for relevant pages
  if (pageName === 'home' || pageName === 'about' || pageName === 'contact') {
    const medicalOrgSchema = {
      "@context": "https://schema.org",
      "@graph": [
        baseSchema,
        {
          "@type": globalSettings.organizationType || "MedicalOrganization",
          "name": globalSettings.organizationName,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": globalSettings.address?.streetAddress,
            "addressLocality": globalSettings.address?.addressLocality,
            "addressRegion": globalSettings.address?.addressRegion,
            "postalCode": globalSettings.address?.postalCode,
            "addressCountry": globalSettings.address?.addressCountry || "US"
          },
          "telephone": globalSettings.telephone,
          "email": globalSettings.email,
          "url": globalSettings.siteUrl,
          "image": ogImage,
          "priceRange": globalSettings.priceRange,
          "paymentAccepted": globalSettings.paymentAccepted,
          "currenciesAccepted": globalSettings.currenciesAccepted,
          "openingHoursSpecification": globalSettings.openingHours?.map((hours: any) => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": hours.dayOfWeek,
            "opens": hours.opens,
            "closes": hours.closes
          }))
        },
        {
          "@type": "Person",
          "name": globalSettings.physicianName,
          "jobTitle": globalSettings.physicianJobTitle,
          "worksFor": {
            "@type": "Organization",
            "name": globalSettings.organizationName
          },
          "medicalSpecialty": globalSettings.medicalSpecialty,
          "alumniOf": globalSettings.alumniOf?.map((school: string) => ({
            "@type": "EducationalOrganization",
            "name": school
          })),
          "memberOf": globalSettings.memberOf?.map((org: string) => ({
            "@type": "Organization",
            "name": org
          })),
          "image": globalSettings.physicianImageUrl,
          "url": `${globalSettings.siteUrl}/about`
        }
      ]
    };
    return JSON.stringify(medicalOrgSchema);
  }

  // Add service-specific schema for service pages
  if (pageName.includes('psychiatry') || pageName.includes('therapy') || pageName.includes('services')) {
    return JSON.stringify({
      ...baseSchema,
      "@type": "MedicalWebPage",
      "medicalAudience": {
        "@type": "Patient"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": pageSEO?.schema?.name || "Mental Health Conditions"
      }
    });
  }

  return JSON.stringify(baseSchema);
}

export default useSEOFromSanity;
