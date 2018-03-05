// @flow
import * as React from 'react';
import { getUIConfigProps } from 'src/utils/common';

import type { BlockUI } from 'src/types/sharedTypes';

type Props = {
  children: React.Node,
  uiConfig: BlockUI,
};

export default function CustomBlockWrapper({ children, uiConfig }: Props) {
  const uiProps = getUIConfigProps({ uiConfig });
  return <div {...uiProps}>{children}</div>;
}
