// @flow
import * as React from 'react';

import { getUIConfigProps } from 'src/utils/common';

type Props = {
  value: string,
  tag: string | React.ComponentType<any>,
  uiConfig: {},
};

export default function Text({ value = '', tag: Tag = 'p', uiConfig = {} }: Props) {
  const uiConfigProps = getUIConfigProps({ uiConfig });
  return <Tag {...uiConfigProps}>{value} </Tag>;
}
