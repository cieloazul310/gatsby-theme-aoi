import { withPrefix } from 'gatsby';
import { useSiteMetadata } from '../graphql-hooks';

export function useBaseUrl() {
  const { siteUrl } = useSiteMetadata();
  const prefix = withPrefix('/').slice(0, -1);

  return removeLastSlash(siteUrl).replace(prefix, '');
}

function removeLastSlash(siteUrl: string) {
  if (siteUrl.slice(-1) === '/') return siteUrl.slice(0, -1);
  return siteUrl;
}
