import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';
import useUpdateOnClient from '../../utils/useUpdateOnClient';

type Props = {
  title?: string;
} & Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ title, color = 'default' }: Props) {
  const isClient = useUpdateOnClient();
  const { lang, social } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <div>
      <Tooltip title={lang === 'ja' ? 'Twitterでシェア' : 'Share On Twitter'}>
        <IconButton key={isClient} color={color} href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={lang === 'ja' ? 'Facebookで共有' : 'Share on Facebook'}>
        <IconButton key={isClient} color={color} href={fbUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      {social.github ? (
        <Tooltip title="GitHub">
          <IconButton
            color={color}
            href={`https://github.com/${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default ShareButtons;
