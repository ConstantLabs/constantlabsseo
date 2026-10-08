import { Helmet } from 'react-helmet-async';
import { siteSchema } from '@/data/schema';
import { routeMeta } from '@/data/routeMeta';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** For the 404 page: robots noindex, and no canonical or og:url. */
  noindex?: boolean;
}

const BASE_URL = 'https://seo.constantlabs.ai';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export const SEO = ({
  title,
  description = 'ConstantSEO by Constant Labs builds technical, local, bilingual, and AI-answer search systems for GCC businesses.',
  path = '/',
  image = DEFAULT_IMAGE,
  breadcrumbs,
  noindex = false,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;

  /* A registered route ships the registry's English title and description
     (src/data/routeMeta.ts), the same ones the prerendered HTML carries, so the head
     does not change when the page hydrates. An Arabic title from the page wins, so
     the Arabic view keeps its own head. */
  const registered = noindex ? undefined : routeMeta(path);
  const isArabicTitle = /[؀-ۿ]/.test(title);
  if (registered && !isArabicTitle) {
    title = registered.title;
    description = registered.description;
  }
  const fullTitle = registered && !isArabicTitle
    ? title
    : /constantseo/i.test(title) ? title : `${title} | ConstantSEO`;

  const allBreadcrumbs: BreadcrumbItem[] = breadcrumbs
    ? [{ name: 'Home', path: '/' }, ...breadcrumbs]
    : [];

  const breadcrumbSchema =
    allBreadcrumbs.length > 0
      ? JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: allBreadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.path}`,
          })),
        })
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      {!noindex && <link rel="canonical" href={url} />}

      {/* Geo tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.country" content="United Arab Emirates" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {!noindex && <meta property="og:url" content={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {!noindex && <meta name="twitter:url" content={url} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* No hreflang: English and Arabic share one URL (the language is a client-side
          toggle), so there are no alternate-language URLs to point at. Pointing en
          and ar at the same URL tells search engines nothing useful. */}

      {/* Site-wide Organization / ProfessionalService / WebSite graph, from facts.json */}
      <script type="application/ld+json">{siteSchema}</script>

      {/* BreadcrumbList JSON-LD */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}
    </Helmet>
  );
};
