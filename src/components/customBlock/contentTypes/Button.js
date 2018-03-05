// @flow
import * as React from 'react';

type Props = {
  value: string,
};

export default function Button({ value = '' }: Props) {
  return <button>{value} </button>;
}
