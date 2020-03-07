import * as React from 'react';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { IconProps } from '@material-ui/core/Icon';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../../components/FabIcon';
import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';

type Props = {
  className?: string;
  title?: string;
} & Partial<Pick<IconProps, 'fontSize'>> &
  Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ className, title, fontSize = 'default', color = 'default' }: Props) {
  const { github } = useSiteMetadata().social;
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <div className={className}>
      <Tooltip title="Twitterでシェア">
        <IconButton color={color} href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FabIcon icon={faTwitter} fontSize={fontSize} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebookでシェア">
        <IconButton color={color} href={fbUrl} target="_blank" rel="noopener noreferrer">
          <FabIcon icon={faFacebookF} fontSize={fontSize} />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton color={color} href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
            <FabIcon icon={faGithub} fontSize={fontSize} />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default ShareButtons;
