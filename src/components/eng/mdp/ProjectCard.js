// @flow
import * as React from 'react';
import {
  StyleSheet,
  breakPoint,
  color,
  css,
  CardV2,
  CardSection,
  Row,
  Col,
  Box,
  Strong,
  H2Bold,
  ReadMore,
} from '@coursera/coursera-ui';

import LearningObjectives from 'src/components/shared/LearningObjectives';
import GradientIcon from 'src/components/shared/GradientIcon';

const styles = StyleSheet.create({
  underlay: {
    background: color.white,
    margin: '-3rem',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transform: 'skewX(353deg) translate(-3%)',
    [`@media (max-width: ${breakPoint.lg}px)`]: {
      background: 'transparent',
    },
  },
  imageWrapperLg: {
    marginBottom: 0,
    position: 'absolute',
    top: '-3rem',
    left: 0,
    bottom: '-3rem',
    right: '-3rem',
    [`@media (max-width: ${breakPoint.lg}px)`]: {
      display: 'none',
    },
  },
  imageWrapperSm: {
    margin: '-3rem',
    marginBottom: '3rem',
  },
  zIndexHigh: {
    position: 'relative',
    zIndex: 1,
  },
  zIndexLow: {
    position: 'relative',
    zIndex: 0,
  },
  imageTop: {
    [`@media (min-width: ${breakPoint.lg}px)`]: {
      display: 'none',
    },
  },
});

export type Props = {
  name: string,
  totalDuration: string,
  weeklyTimeCommitment: string,
  description: string,
  learningObjectives: Array<string>,
  image?: string,
};

export default function ProjectCard({
  name,
  totalDuration,
  weeklyTimeCommitment,
  description,
  learningObjectives,
  image,
}: Props): React.Node {
  let timeText = '';
  if (totalDuration && weeklyTimeCommitment) {
    timeText = `${totalDuration} (${weeklyTimeCommitment})`;
  } else if (totalDuration) {
    timeText = `${totalDuration} `;
  } else if (weeklyTimeCommitment) {
    timeText = `${weeklyTimeCommitment} `;
  }

  const showLearningObjectives = learningObjectives && learningObjectives.length > 0;
  return (
    <CardV2 rootClassName="ProjectCard bg-white">
      <CardSection rootClassName="p-a-3">
        <Row alignItems="stretch">
          {!showLearningObjectives && (
            <Col xs={12} lg={6} rootClassName={styles.imageTop}>
              <Box rootClassName={styles.imageWrapperSm}>
                <img src={image} alt={name} className="w-100 h-100" />
              </Box>
            </Col>
          )}
          <Col xs={12} lg={6} rootClassName={styles.zIndexHigh}>
            {!showLearningObjectives && <div {...css('pos-absolute', styles.underlay)} />}
            <div className="pos-relative p-r-3">
              <Box alignItems="center" rootClassName="m-b-1">
                <div {...css('m-r-1', styles.iconWrapper)}>
                  <GradientIcon />
                </div>
                <Strong rootClassName="text-secondary">{timeText}</Strong>
              </Box>
              <H2Bold tag="h3" rootClassName="m-b-1">
                {name}
              </H2Bold>
              <ReadMore>{description}</ReadMore>
            </div>
          </Col>
          <Col xs={12} lg={6} rootClassName={styles.zIndexLow}>
            {showLearningObjectives && (
              <LearningObjectives learningObjectives={learningObjectives} titleTag="h4" oneColumnPerRow />
            )}
            {!showLearningObjectives &&
              image && (
                <Box rootClassName={styles.imageWrapperLg}>
                  <img src={image} alt={name} className="w-100 h-100" />
                </Box>
              )}
          </Col>
        </Row>
      </CardSection>
    </CardV2>
  );
}
