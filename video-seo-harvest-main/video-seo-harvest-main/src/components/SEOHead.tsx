
import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Update meta tags
    document.title = "VideoHarvest - Free Video Downloader | Download Videos from Any Platform";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download videos from YouTube, TikTok, Instagram, Facebook and more. Fast, free, and secure video downloader with no registration required. Support for HD quality downloads.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "VideoHarvest",
      "description": "Free online video downloader supporting multiple platforms",
      "url": "https://videoharvest.com",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "YouTube video download",
        "TikTok video download",
        "Instagram video download",
        "Facebook video download",
        "HD quality downloads",
        "No registration required"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEOHead;
