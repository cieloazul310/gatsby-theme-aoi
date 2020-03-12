import * as React from 'react';
import { useSiteMetadata } from '../graphql-hooks';
import { useLocation } from '@reach/router';

type ShareType = 'twitter' | 'line' | 'facebook';

export default function useSocialShare(type: ShareType, title?: string) {
  const { href } = useLocation();
  const siteTitle = useSiteMetadata().title;
  const shareTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return React.useMemo(
    () =>
      type === 'twitter'
        ? `https://twitter.com/intent/tweet?text=${encodeURI(shareTitle)}&url=${encodeURIComponent(href)}`
        : type === 'line'
        ? `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(href)}`
        : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`,
    [href, shareTitle, type]
  );
}
