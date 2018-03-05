// @flow
import * as React from 'react';
import { Box, StyleSheet, color, css, H4Bold } from '@coursera/coursera-ui';
import {
  SvgGlobe,
  SvgMoney,
  SvgClock,
  SvgGraph2,
  SvgStacks,
  SvgCommentDots,
  SvgChevronRight,
} from '@coursera/coursera-ui/svg';

const ICON_SIZE = 40;

const ALL_ICONS = {
  SvgGlobe,
  SvgMoney,
  SvgClock,
  SvgGraph2,
  SvgStacks,
  SvgCommentDots,
};
const DEFAULT_ICON = SvgChevronRight;

const styles = StyleSheet.create({
  iconWrapper: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: '50%',
    border: `2px solid ${color.divider}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
});

export type Props = Array<{ icon: string, title: string, subtitle?: string }>;

export default function ProductGlance({ dataList = [] }: Props) {
  const dataListWithIcons = dataList.map(item => ({
    ...item,
    IconTag: ALL_ICONS[item.icon] || DEFAULT_ICON,
  }));

  return (
    <div className="ProductGlance">
      {dataListWithIcons.map(({ title, subtitle, IconTag }) => (
        <Box key={title} alignItems="center" rootClassName="m-b-3">
          <div {...css('m-a-1s m-r-1', styles.iconWrapper)}>
            <IconTag size={ICON_SIZE - 24} />
          </div>
          <Box flexDirection="column">
            <H4Bold tag="h4" rootClassName="m-b-1s font-md">
              {title}
            </H4Bold>
            <span className="font-sm text-secondary">{subtitle}</span>
          </Box>
        </Box>
      ))}
    </div>
  );
}
