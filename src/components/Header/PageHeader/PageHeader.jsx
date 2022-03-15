import ASSESTS from 'assets';
import Head from 'next/head';
import TYPES from 'types';

/**
 * PageHeader component
 * @param {string} page Name of the page
 * @param {string} title Title of the page
 * @param {string} description Description of the page
 */
const PageHeader = ({ page = 'HOME', title, description }) => {
  const _title =
    title || TYPES.PAGEMETA[page.toUpperCase()]?.TITLE || TYPES.PAGEMETA.TITLE;
  const _description =
    description ||
    TYPES.PAGEMETA[page.toUpperCase()]?.DESCRIPTION ||
    TYPES.PAGEMETA.DESCRIPTION;
  return (
    <Head>
      <title key="title">{_title}</title>
      <meta name="description" content={_description} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:site_name" content={'Nexplorer'} />
      <meta property="og:url" content="https://nexus-explorer.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Nexus Explorer V2" />
      <meta property="og:description" content="Nexus Blockchain Statistics" />
      <meta property="og:image" content="/OpenGraph_Image.jpg" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="nexus-explorer.vercel.app" />
      <meta
        property="twitter:url"
        content="https://nexus-explorer.vercel.app/"
      />
      <meta name="twitter:title" content="Nexus Explorer V2" />
      <meta name="twitter:description" content="Nexus Blockchain Statistics" />
      <meta name="twitter:image" content="/OpenGraph_Image.jpg" />
    </Head>
  );
};

export default PageHeader;
