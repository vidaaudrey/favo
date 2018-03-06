// @flow
import * as React from 'react';
import { Container, Row, Col } from '@coursera/coursera-ui';
import { compose, withProps } from 'recompose';

// import { FormattedMessage } from 'js/lib/coursera.react-intl';

import SectionTitle from 'src/components/templates/SectionTitle';
import CourseCard from 'src/components/eng/mdp/CourseCard';
import ExpandableSections from 'src/components/shared/ExpandableSections';

import type { Props as Course } from 'src/components/eng/mdp/CourseCard';

type Props = {
  featureList: Array<string>,
  courses: Array<Course>,
};

export function CoursesMDP({ featureList = [], courses: allCourses = [] }: Props): React.Node {
  const courseCount = allCourses.length;
  return (
    <div className="CoursesMDP p-y-5">
      <Container>
        <Row>
          <Col xs={12} lg={4} rootClassName="p-a-2">
            <SectionTitle
              hasNoColWrapper
              alignText="left"
              alignItems="start"
              title={`${courseCount} ${courseCount > 1 ? 'Courses' : 'Course'} in this MasterTrack`}
              // title={
              //   <FormattedMessage
              //     message={_t(`{dataSize, plural, =1 {Course} other {Courses}}
              //       in this MasterTrack
              //     `)}
              //     dataSize={allCourses.length}
              //   />
              // }
            />
            <span className="d-block m-b-1">Includes:</span>
            <ul>{featureList.map(feature => <li key={feature}>{feature}</li>)}</ul>
          </Col>
          <Col xs={12} lg={8}>
            <ExpandableSections
              dataList={allCourses}
              collapsedText={`See all ${courseCount} ${courseCount > 1 ? 'Courses' : 'Course'}`}
              // collapsedText={
              //   <FormattedMessage
              //     message={_t(`See all {dataSize}
              //       {dataSize, plural, =1 {Course} other {Courses}}
              //     `)}
              //     dataSize={allCourses.length}
              //   />
              // }
              expandedText="See less"
              renderItem={item => (
                <div className="m-b-2" key={item.id}>
                  <CourseCard
                    id={item.id}
                    nextSessionStartTime={item.nextSessionStartTime}
                    totalDuration={item.totalDuration}
                    title={item.title}
                    description={item.description}
                    onDemandLearnerMaterials={item.onDemandLearnerMaterials}
                  />
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export const CoursesMDPData = {
  featureList: ['Pre-recorded videos', 'Live components', 'Office hours', 'Use web and mobile'],
  courses: [
    {
      id: 'c1',
      nextSessionStartTime: 'Feb 22nd',
      totalDuration: '3 weeks to complete',
      title: 'Introduction to UX',
      description:
        'This UX course provides an introduction to the fields of UX research and design. Learners will gain an understanding of what is involved in UX research, MORE',
      onDemandLearnerMaterials: {
        totalQuizzesCount: 2,
        totalVideoLectureCount: 13,
        totalReadingCount: 3,
        totalLectureDuration: 69855301,
      },
    },
    {
      id: 'c2',
      nextSessionStartTime: 'Feb 22nd',
      totalDuration: '3 weeks to complete',
      title: 'Introduction to UX',
      description:
        'This UX course provides an introduction to the fields of UX research and design. Learners will gain an understanding of what is involved in UX research, MORE',
      onDemandLearnerMaterials: {
        totalQuizzesCount: 2,
        totalVideoLectureCount: 13,
        totalReadingCount: 3,
        totalLectureDuration: 69855301,
      },
    },
    {
      id: 'c3',
      nextSessionStartTime: 'Feb 22nd',
      totalDuration: '3 weeks to complete',
      title: 'Introduction to UX',
      description:
        'This UX course provides an introduction to the fields of UX research and design. Learners will gain an understanding of what is involved in UX research, MORE',
      onDemandLearnerMaterials: {
        totalQuizzesCount: 2,
        totalVideoLectureCount: 13,
        totalReadingCount: 3,
        totalLectureDuration: 69855301,
      },
    },
  ],
};

export default compose(withProps(() => CoursesMDPData))(CoursesMDP);
