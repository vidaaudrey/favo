// @flow
import * as React from 'react';

type Props = {
  value: string,
};

export default function Image({ value = '' }: Props) {
  return <div>{value} </div>;
}
