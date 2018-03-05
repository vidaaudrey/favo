// @flow
import * as React from 'react';
import { Container, Row, H2, H2Bold, Col, ReadMore } from '@coursera/coursera-ui';
import { compose, withProps } from 'recompose';

import ProductGlance from 'src/components/shared/ProductGlance';
import LearningObjectives from 'src/components/shared/LearningObjectives';
import Skills from 'src/components/shared/Skills';

import type { Props as GlanceProps } from 'src/components/shared/ProductGlance';

type Props = {
  description: string,
  tagline: string,
  courseName: string,
  activeItemId: ?string,
  onCardItemClick: (courseId: ?string) => void,
  skills: Array<string>,
  learningObjectives: Array<string>,
  level: string,
  totalDuration: string,
  weeklyTimeCommitment: string,
  price: number,
  projectCounts: number,
  glance: GlanceProps,
};

export function AboutMasterTrack({
  description,
  tagline,
  courseName,
  activeItemId,
  onCardItemClick,
  skills,
  level,
  learningObjectives = [],
  price,
  totalDuration,
  weeklyTimeCommitment,
  projectCounts,
  glance = [],
  ...rest
}: Props) {
  return (
    <Container rootClassName="AboutMasterTrack p-section p-y-5">
      <Row>
        <Col xs={12} md={8} rootClassName="p-r-4">
          <H2 tag="span" rootClassName="d-block m-b-3">
            About this MasterTrack
          </H2>
          <H2Bold rootClassName="m-b-2">{tagline}</H2Bold>
          <div className="p-b-1 m-b-1">
            <ReadMore>{description}</ReadMore>
          </div>
          <div className="m-b-2">
            <LearningObjectives learningObjectives={learningObjectives} />
          </div>
          <Skills skills={skills} />
        </Col>
        <Col xs={12} md={4} rootClassName="p-t-5">
          <ProductGlance dataList={glance} />
        </Col>
      </Row>
    </Container>
  );
}

export const AboutMasterTrackData = {
  description:
    'Learners will gain hands-on experience with taking a product from initial concept, through user research, ideation, and refinement, formal analysis, prototyping, and user testing. ...',
  tagline: 'Integrate UX Research and UX Design to create great products through understanding user needs',
  skills: [
    'User Centered Design Theory',
    'User Testing',
    'Heuristic Evaluation',
    'Wireframing',
    'Prototyping',
    'A/B Testing',
    'Remote Testing',
  ],
  learningObjectives: [
    'Incorporate UX Research and Design to design a complete product',
    'Taking from an initial concept to an interactive prototype',
    'Learn how to do refinement, formal analysis, prototyping, and user testing',
    'Learn how to conduct UX research using A/B testing and web analytics',
  ],
  glance: [
    {
      icon: 'SvgGlobe',
      title: '100% online courses',
    },
    {
      icon: 'SvgMoney',
      title: '$2000 ',
      subtitle: 'option to pay in 2 installments',
    },
    {
      icon: 'SvgClock',
      title: '8 months to complete',
      subtitle: '3-5 hours to complete (scheduled)',
    },
    {
      icon: 'SvgGraph2',
      title: 'Beginner level',
      subtitle: 'No prior experience needed',
    },
    {
      icon: 'SvgStacks',
      title: '12 hands-on projects',
    },
    {
      icon: 'SvgCommentDots',
      title: 'English',
      subtitle: 'Subtitles: French, Chinese(Simplified), Greek, Italian, Portuguese(Brazillian), Vietanamese, Russian',
    },
  ],
  // level: 'BEGINNER',
  // totalDuration: '8 months',
  // weeklyTimeCommitment: '3-5 hours per week (scheduled)',
  // price: 2000,
  // projectCounts: 3, // derieved
  subtitles:
    'Subtitles available for some courses: French, Chinese(Simplified), Greek, Italian, Portuguese(Brazillian), Vietanamese, Russian',
};

export default compose(withProps(() => AboutMasterTrackData))(AboutMasterTrack);
