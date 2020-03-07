import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useLocation } from '@reach/router';
import FabIcon from '../../components/FabIcon';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { shareOnFacebook, useTwitterShareUrl } from '../../utils/sharer';
import { IconProps } from '@material-ui/core/Icon';

type Props = {
  className?: string;
  title?: string;
} & Partial<Pick<IconProps, 'fontSize'>> &
  Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ className, title, fontSize, color }: Props) {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query ShareButton {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `);
  const twitterShareUrl = useTwitterShareUrl(location.href, title);
  const { github } = data.site.siteMetadata.social;
  return (
    <div className={classNames(className)}>
      <Tooltip title="Twitterでシェア">
        <IconButton color={color || 'default'} href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <FabIcon icon={faTwitter} fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebookでシェア">
        <IconButton color={color || 'default'} href={shareOnFacebook({ url: location.href })} target="_blank" rel="noopener noreferrer">
          <FabIcon icon={faFacebookF} fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton color={color || 'default'} href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
            <FabIcon icon={faGithub} fontSize={fontSize || 'default'} />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default ShareButtons;
