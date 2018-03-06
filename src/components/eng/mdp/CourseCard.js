// @flow
import * as React from 'react';
import { color, CardV2, CardSection, Box, Strong, H2Bold, ReadMore } from '@coursera/coursera-ui';
import _ from 'underscore';

// import { FormattedMessage } from 'js/lib/coursera.react-intl';
import LearnerMaterialSummary from 'src/components/shared/LearnerMaterialSummary';
import type { OnDemandLearningMaterials } from 'src/components/shared/LearnerMaterialSummary';

export type Props = {
  id: string,
  nextSessionStartTime: string,
  totalDuration: string,
  title: string,
  description: string,
  onDemandLearnerMaterials: OnDemandLearningMaterials,
};

export default function CourseCard({
  id,
  nextSessionStartTime,
  totalDuration,
  title,
  description,
  onDemandLearnerMaterials,
}: Props): React.Node {
  return (
    <CardV2 rootClassName="CourseCard bg-white">
      <CardSection rootClassName="p-a-3">
        {nextSessionStartTime && (
          <Box alignItems="center" rootClassName="m-b-1">
            <span
              className="d-inline-block color-white p-x-1 p-y-1s font-sm font-bold m-r-1"
              style={{ borderRadius: 4, background: color.danger }}
            >
              Start {nextSessionStartTime}
              {/* <FormattedMessage message={_t('Starts {time}')} time={nextSessionStartTime} /> */}
            </span>
            <Strong rootClassName="m-b-1s text-secondary">{totalDuration}</Strong>
          </Box>
        )}
        <H2Bold rootClassName="p-y-1s">{title}</H2Bold>
        <ReadMore>{description}</ReadMore>
        {!_(onDemandLearnerMaterials.totalQuizzesCount).isEmpty() && (
          <LearnerMaterialSummary {...onDemandLearnerMaterials} />
        )}
      </CardSection>
    </CardV2>
  );
}
