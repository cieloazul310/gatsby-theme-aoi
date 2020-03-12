import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/Github';
import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';
import useUpdateOnClient from '../../utils/useUpdateOnClient';

type Props = {
  className?: string;
  title?: string;
} & Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ className, title, color = 'default' }: Props) {
  const isClient = useUpdateOnClient();
  const { github } = useSiteMetadata().social;
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <Box className={className}>
      <Tooltip title="Share On Twitter">
        <IconButton key={isClient} color={color} href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook">
        <IconButton key={isClient} color={color} href={fbUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton color={color} href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Box>
  );
}

export default ShareButtons;
