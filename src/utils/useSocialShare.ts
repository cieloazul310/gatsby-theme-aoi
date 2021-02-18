import * as React from 'react';
import { useLocation } from '@reach/router';
import { useSiteMetadata } from '../graphql-hooks';

type ShareType = 'twitter' | 'line' | 'facebook';

export default function useSocialShare(type: ShareType, title?: string): string {
  const { href } = useLocation();
  const siteTitle = useSiteMetadata().title;
  const shareTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return React.useMemo(() => {
    if (type === 'twitter') return `https://twitter.com/intent/tweet?text=${encodeURI(shareTitle)}&url=${encodeURIComponent(href)}`;
    if (type === 'line') return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(href)}`;
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`;
  }, [href, shareTitle, type]);
}
