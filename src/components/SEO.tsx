import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://constantlabs.ai';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export const SEO = ({
  title,
  description = 'Constant Labs: We build fast, ship faster, scale infinitely. From AI-powered voice transcription to universal translators, we create innovative web applications with cutting-edge technology.',
  path = '/',
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? 'Constant Labs - Building Digital Experiences That Break Boundaries' : `${title} | Constant Labs`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

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
