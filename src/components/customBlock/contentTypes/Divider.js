// @flow
import * as React from 'react';
import { Divider as CUIDivider } from '@coursera/coursera-ui';

type Props = {};

export default function Divider({ ...rest }: Props) {
  return <CUIDivider {...rest} />;
}
