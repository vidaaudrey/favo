// @flow
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  value: string,
};

export default function Markdown({ value = '' }: Props) {
  return <ReactMarkdown source={value} />;
}
