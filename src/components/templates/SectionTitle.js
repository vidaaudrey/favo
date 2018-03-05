// @flow
import * as React from 'react';
import { Col, H2, P, Box } from '@coursera/coursera-ui';

type Props = {
  rootClassName: string | Object,
  title?: string,
  subtitle?: string,
  titleTag?: string,
  subtitleTag?: string,
  alignItems?: 'start' | 'center' | 'end',
  alignText?: 'left' | 'center' | 'right',
  hasNoColWrapper: boolean,
};

export default function SectionTitle({
  rootClassName = '',
  title,
  subtitle,
  titleTag = 'h3',
  subtitleTag = 'p',
  alignItems = 'center',
  alignText = 'center',
  hasNoColWrapper,
}: Props): React.Node {
  if (!(title || subtitle)) {
    return null;
  }

  const wrapperRootClassName = `SectionTitle m-b-3 text-xs-${alignText} ${rootClassName}`;

  if (hasNoColWrapper) {
    return (
      <Box rootClassName={wrapperRootClassName} flexDirection="column" alignItems={alignItems}>
        {title && (
          <H2 tag={titleTag} rootClassName="max-text-width-xl m-b-1">
            {title}
          </H2>
        )}
        {subtitle && (
          <P tag={subtitleTag} rootClassName="max-text-width m-b-1">
            {subtitle}
          </P>
        )}
      </Box>
    );
  } else {
    return (
      <Col rootClassName={wrapperRootClassName} noGutter>
        <Box flexDirection="column" alignItems={alignItems}>
          {title && (
            <H2 tag={titleTag} rootClassName="max-text-width-xl m-b-1">
              {title}
            </H2>
          )}
          {subtitle && (
            <P tag={subtitleTag} rootClassName="max-text-width m-b-1">
              {subtitle}
            </P>
          )}
        </Box>
      </Col>
    );
  }
}
