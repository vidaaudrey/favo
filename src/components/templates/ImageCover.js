// @flow
import * as React from 'react';

export default function ImageCover({
  image,
  title,
  height = 200,
  style = {},
}: {
  image: string,
  title?: string,
  height?: number,
  style?: Object,
}) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        height,
        overflow: 'hidden',
        lineHeight: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
        ...style,
      }}
      src={image}
      alt={title}
    />
  );
}
