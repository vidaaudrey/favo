// @flow
import * as React from 'react';
import { Box, H4 } from '@coursera/coursera-ui';

export type Props = {
  image: string,
  title: string,
  description?: string,
};

export default function BlurbImageTop({ image, title, description }: Props): React.Node {
  return (
    <div className="BlurbImageTop">
      <div>
        <img className="w-100 m-b-2" src={image} alt={title} />
      </div>
      <Box flex={1} flexDirection="column">
        <H4 tag="h3">{title}</H4>
        {description && <span>{description}</span>}
      </Box>
    </div>
  );
}
