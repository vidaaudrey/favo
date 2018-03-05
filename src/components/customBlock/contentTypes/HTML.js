// @flow
/* eslint-disable */
import * as React from 'react';

type Props = {
  value: string,
};

function createMarkup(value) {
  return { __html: value };
}

export default function HTML({ value = '' }: Props) {
  return <div dangerouslySetInnerHTML={createMarkup(value)} />;
}
