import { useStaticQuery, graphql } from 'gatsby';

export interface UseSiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      keywords: string[];
      lang: string;
      siteUrl: string;
      social: {
        mail: string | null;
        twitter: string | null;
        github: string | null;
        facebook: string | null;
        gitlab: string | null;
        linkedin: string | null;
        medium: string | null;
        pocket: string | null;
        tumblr: string | null;
        instagram: string | null;
        vimeo: string | null;
        youtube: string | null;
      };
    };
  };
}

export function useSiteMetadata(): UseSiteMetadataQuery['site']['siteMetadata'] {
  const { site } = useStaticQuery<UseSiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          lang
          siteUrl
          social {
            mail
            twitter
            github
            facebook
            gitlab
            linkedin
            medium
            pocket
            tumblr
            instagram
            vimeo
            youtube
          }
        }
      }
    }
  `);
  return site.siteMetadata;
}
