// @flow
import * as React from 'react';
import { H1, H2, P, Box, breakPoint } from '@coursera/coursera-ui';

import Media from 'react-media';

type Props = {
  rootClassName: Object,
  title: string,
  subtitle?: string,
  titleTag?: string,
  subtitleTag?: string,
  alignItems?: 'start' | 'center' | 'end',
  alignText?: 'left' | 'center' | 'right',
  halfWidth?: boolean,
};

export default function BannerTitle({
  rootClassName,
  title,
  subtitle,
  titleTag = 'h1',
  subtitleTag = 'p',
  alignItems = 'start',
  alignText = 'center',
  halfWidth = false,
}: Props): React.Node {
  if (!(title || subtitle)) {
    return null;
  }
  return (
    <Box
      rootClassName={`BannerTitle m-b-3 text-xs-${alignText}`}
      flexDirection="column"
      alignItems={alignItems}
    >
      {halfWidth ? (
        <H2 tag={titleTag} rootClassName="max-text-width-xl m-b-2">
          {title}
        </H2>
      ) : (
        <Media query={`(max-width: ${breakPoint.md}px)`}>
          {matches =>
            matches ? (
              <H2 tag={titleTag} rootClassName="max-text-width-xl m-b-2">
                {title}
              </H2>
            ) : (
              <H1 tag={titleTag} rootClassName="max-text-width-xl m-b-2">
                {title}
              </H1>
            )
          }
        </Media>
      )}
      {subtitle && (
        <P tag={subtitleTag} rootClassName="max-text-width m-b-0">
          {subtitle}
        </P>
      )}
    </Box>
  );
}
