// @flow
import * as React from 'react';

import BlurbImageTop from 'src/components/templates/BlurbImageTop';
import BlurbIconLeft from 'src/components/templates/BlurbIconLeft';

const componentList = {
  BlurbImageTop,
  BlurbIconLeft,
};

export type Props = {
  blurbName?: string,
};

export default function Blurb({ blurbName, ...rest }: Props): React.Node {
  const Tag = componentList[blurbName];

  if (!Tag) {
    console.error('FIXME: Blurb', blurbName);
    return null;
  }
  return <Tag {...rest} />;
}
