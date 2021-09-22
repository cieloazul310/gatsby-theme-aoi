import * as React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
}

function Section({ children }: Props): JSX.Element {
  return <Box bgcolor="background.paper">{children}</Box>;
}

export default Section;

export function SectionDivider(): JSX.Element {
  return <Box py={1} />;
}
