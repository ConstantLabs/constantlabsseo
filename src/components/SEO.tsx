import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://seo.constantlabs.ai';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export const SEO = ({
  title,
  description = 'ConstantSEO by Constant Labs — Dubai\'s leading AI-powered SEO agency. We deploy intelligent AI agents to automate and optimize your search engine rankings across the GCC market.',
  path = '/',
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? 'ConstantSEO | AI-Powered SEO by Constant Labs' : `${title} | ConstantSEO`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Geo tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.country" content="United Arab Emirates" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
