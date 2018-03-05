// @flow
import * as React from 'react';
import { color, Box, H4Bold, H4Light, CenterBox } from '@coursera/coursera-ui';
import { SvgMembers, SvgLayer, SvgGraduationCap, SvgStackedFile } from '@coursera/coursera-ui/svg';

const icons = {
  SvgMembers,
  SvgLayer,
  SvgGraduationCap,
  SvgStackedFile,
};

const SVG_CIRCLE_SIZE = 104;
const SVG_SIZE = 48;

export type Props = {
  icon: string,
  iconColor?: string,
  title: string,
  description?: string,
};

export default function BlurbIconLeft({
  icon,
  iconColor = color.icon,
  title,
  description,
}: Props): React.Node {
  const SvgName = icons[icon];

  return (
    <Box rootClassName="BlurbIconLeft" alignItems="center">
      <CenterBox
        rootClassName="circle-shadow bg-white m-r-2"
        style={{ width: SVG_CIRCLE_SIZE, height: SVG_CIRCLE_SIZE }}
      >
        {SvgName && <SvgName size={SVG_SIZE} color={iconColor} />}
      </CenterBox>
      <Box flex={1} flexDirection="column">
        <H4Bold rootClassName="m-b-1" tag="h3">
          {title}
        </H4Bold>
        {description && <H4Light tag="span">{description}</H4Light>}
      </Box>
    </Box>
  );
}
