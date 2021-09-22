import * as React from 'react';
import Icon, { IconProps } from '@mui/material/Icon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends IconProps {
  icon: IconDefinition;
  defaultVertical?: boolean;
}

// helpers
function sizeToFontSize(fontSize: IconProps['fontSize']): number {
  if (fontSize === 'small') return 20;
  if (fontSize === 'large') return 36;
  return 24;
}

function FabIcon({ icon, defaultVertical, ...options }: Props): JSX.Element {
  const [width] = icon.icon;
  const dy = width > 512 ? (512 - width) / 2 : 0;
  return (
    <Icon {...options}>
      <FontAwesomeIcon
        icon={icon}
        style={{
          verticalAlign: !defaultVertical ? '0.125em' : undefined,
          transform: dy !== null ? `translateX(${dy / sizeToFontSize(options.fontSize)}px)` : undefined,
        }}
      />
    </Icon>
  );
}

FabIcon.defaultProps = {
  defaultVertical: undefined,
};

export default FabIcon;
