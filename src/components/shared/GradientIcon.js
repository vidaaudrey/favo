// @flow
import * as React from 'react';
import { gradient, color, GradientWrapper, CenterBox } from '@coursera/coursera-ui';
import { SvgClock } from '@coursera/coursera-ui/svg';

const ICON_SIZE = 40;

type Props = {
  bgGradient?: { start: string, end: string, deg?: string },
  icon?: ({ color?: string }) => React.Node,
};

export default function GradientIcon({ bgGradient = gradient.peach, icon: Icon = SvgClock }: Props): React.Node {
  return (
    <GradientWrapper gradient={bgGradient} style={{ borderRadius: '50%' }}>
      <CenterBox style={{ width: ICON_SIZE, height: ICON_SIZE }}>
        <Icon size={20} color={color.white} />
      </CenterBox>
    </GradientWrapper>
  );
}
