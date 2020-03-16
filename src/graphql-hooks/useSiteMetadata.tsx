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
        mail: string;
        twitter: string;
        github: string;
        facebook: string;
        gitlab: string;
        linkedin: string;
        medium: string;
        pocket: string;
        tumblr: string;
        instagram: string;
        vimeo: string;
        youtube: string;
      };
    };
  };
}

export function useSiteMetadata() {
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
