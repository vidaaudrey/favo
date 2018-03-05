// @flow
import * as React from 'react';
import { Box } from '@coursera/coursera-ui';

export type Props = {
  componentName?: string,
};

export default function DummyBlock({ componentName = 'DummyBlock' }: Props): React.Node {
  return (
    <Box rootClassName="DummyBlock w-100 p-y-1s p-x-1 bg-gray p-y-5 p-x-2" alignItems="center" justifyContent="center">
      <h2> TODO: {componentName}</h2>
    </Box>
  );
}
