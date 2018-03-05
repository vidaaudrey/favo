// @flow
import * as React from 'react';

type Props = {
  content: string,
};

// TODO(Audrey): add more flexbile text types
export default function Placeholder({ content = '' }: Props) {
  return <div>{content}Placeholder </div>;
}
