// @flow
import * as React from 'react';
import { Container, Row, Col } from '@coursera/coursera-ui';
import { compose, withProps } from 'recompose';

import SectionTitle from 'src/components/templates/SectionTitle';
import ProjectCard from 'src/components/eng/mdp/ProjectCard';
import ExpandableSections from 'src/components/shared/ExpandableSections';

import type { Props as Project } from 'src/components/eng/mdp/ProjectCard';

type Props = {
  title: string,
  subtitle: string,
  projects: Array<Project>,
};

export function ProjectListMDP({ title, subtitle, projects = [], ...rest }: Props) {
  return (
    <div className="ProjectListMDP bg-light-gray p-y-5">
      <Container>
        <Row>
          <SectionTitle title={title} subtitle={subtitle} />
          <Col>
            <ExpandableSections
              dataList={projects}
              defaultDisplayItemCount={3}
              collapsedText={`See all ${projects.length} projects`}
              expandedText="See less"
              renderItem={(project: Project) => (
                <div className="m-b-2" key={project.name}>
                  <ProjectCard {...project} />
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export const ProjectListMDPData = {
  title: 'Industry-relevant hands-on projects to build your portfolio',
  subtitle:
    'Learners will incorporate UX Research and Design to design a complete product, taking it form an initial concept to an interactive prototype.',
  projects: [
    {
      id: '1',
      name: 'UX (User Experience) Capstone',
      totalDuration: '8 weeks to complete',
      weeklyTimeCommitment: '4-5 hours per week',
      description:
        'In this UX capstone, you’ll conduct a multi-stage user experience project to design a product from scratch, incorporating Design and Research methods within the context of Iterative User-Centered Design. This capstone project will be divided into 6 "Milestones" to provide  MORE',
      image: 'https://i.imgur.com/P8i7ZWS.png',
    },
    {
      id: '2',
      name: 'From Wireframe to Prototype',
      totalDuration: '3 weeks to complete',
      weeklyTimeCommitment: '3-4 hours per week',
      description:
        'Building on UX Design: From Concept to Wireframe, this UX course you will show you how to take a set of wireframes and interaction architecture and embody it in an interactive prototype. Using a state-of-the-art prototyping tool, you will build a testable prototype and use it to MORE',
      learningObjectives: [
        'How to run a paper prototype test',
        'Expand on the wireframe by developing high-fidelity mockups',
        'Develop interactivity to further test the user experience',
        'Create a design specification document',
      ],
    },
    {
      id: '3',
      name: 'UX Research at Scale: Analytics and Online Experiments',
      totalDuration: '8 weeks to complete',
      weeklyTimeCommitment: '4-5 hours per week',
      description:
        'Learn how to conduct and analyze UX research at scale using online tools such as A/B testing and web analytics.',
      learningObjectives: [
        'Learn how web analytics works and how to analyze analytics data',
        'Understand how to develop A-B tests, before/after, and multivariate experiments',
        'Learn how to set up and analyze remote unmoderated testing studies',
      ],
    },
  ],
};

export default compose(withProps(() => ProjectListMDPData))(ProjectListMDP);
