import { renderHook } from '@testing-library/react-hooks';
import * as Gatsby from 'gatsby';
import { useSiteMetadata } from '../useSiteMetadata';
const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => {
    return {
      site: {
        siteMetadata: {
          title: `Gatsby Theme TypeScript Material-UI`,
          description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
          author: `@gatsbyjs`,
          siteUrl: '',
          keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
          lang: '',
          social: {
            mail: '',
            twitter: 'cieloazul310',
            github: '',
            facebook: '',
            gitlab: '',
            linkedin: '',
            medium: '',
            pocket: '',
            tumblr: '',
            instagram: '',
            vimeo: '',
            youtube: '',
          },
        },
      },
    };
  });
});

describe('useSiteMetadata', () => {
  it('use hooks', () => {
    const { result } = renderHook(() => useSiteMetadata());
    expect(result.current.title).toBe('Gatsby Theme TypeScript Material-UI');
    expect(result.current.author).toBe('@gatsbyjs');
    expect(result.current.social.twitter).toBe('cieloazul310');
  });
});
