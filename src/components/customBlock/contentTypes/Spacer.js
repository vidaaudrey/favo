// @flow
import * as React from 'react';

type Props = {
  content: string,
};

// TODO(Audrey): add more flexbile text types
export default function Spacer({ content = '' }: Props) {
  return <p>{content} </p>;
}
