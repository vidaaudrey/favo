// @flow
import * as React from 'react';
import { Container } from '@coursera/coursera-ui';
import cx from 'classnames';

type Props = {
  isFullwidth?: boolean,
  backgroundColor?: string,
  backgroundImage?: string,
  children: React.Node,
};

export default function Wrapper({
  children,
  isFullwidth,
  backgroundColor,
  backgroundImage,
  ...rest
}: Props): React.Node {
  const style = {};
  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }
  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
  }

  return (
    <div className={cx('w-100', { 'center-bg': backgroundImage })} style={style}>
      <Container {...rest} isFluid={isFullwidth}>
        {children}
      </Container>
    </div>
  );
}
