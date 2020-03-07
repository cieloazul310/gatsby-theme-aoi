import { useStaticQuery, graphql } from 'gatsby';

interface ShareOnTwitterProps {
  url: string;
  title?: string;
}

export const shareOnTwitter = ({ url, title }: ShareOnTwitterProps): string =>
  title
    ? `https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURIComponent(url)}`
    : `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;

interface ShareOnFacebookProps {
  url: string;
}

export const shareOnFacebook = ({ url }: ShareOnFacebookProps): string =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

export const shareOnLine = ({ url }: { url: string }): string => {
  return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
};

interface UseTwitterShareQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export function useTwitterShareUrl(url: string, title?: string) {
  const data = useStaticQuery<UseTwitterShareQuery>(graphql`
    query UseTwitterShare {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;
  const shareTitle = title ? `${title} | ${siteTitle}` : `${siteTitle}`;
  return `https://twitter.com/intent/tweet?text=${encodeURI(shareTitle)}&url=${encodeURIComponent(url)}`;
}
