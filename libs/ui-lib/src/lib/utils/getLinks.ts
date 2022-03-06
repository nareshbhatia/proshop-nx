import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const hrefCatalog = publicRuntimeConfig.hrefCatalog;
const hrefCart = publicRuntimeConfig.hrefCart;

export function getLinks() {
  return {
    hrefCatalog,
    hrefCart,
  };
}
