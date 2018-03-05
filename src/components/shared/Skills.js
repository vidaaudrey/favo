// @flow
import * as React from 'react';
import { Pill, Box, Label } from '@coursera/coursera-ui';

type Props = {
  skills: Array<string>,
};

export default function Skills({ skills = [], ...rest }: Props) {
  if (skills.length === 0) return null;
  return (
    <div className="Skills border-a p-a-2" style={{ borderRadius: 4 }}>
      <Label tag="h3" rootClassName="text-secondary m-b-2">
        Skills you will learn
      </Label>
      <Box flexWrap="wrap">
        {skills.map(skill => <Pill key={skill} size="lg" label={skill} rootClassName="m-r-1s m-b-1s" />)}
      </Box>
    </div>
  );
}
