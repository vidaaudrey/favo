// @flow
import * as React from 'react';
import { compose, withProps } from 'recompose';

import Section1Col from 'src/components/templates/Section1Col';
import Section2Col from 'src/components/templates/Section2Col';
import Section3Col from 'src/components/templates/Section3Col';

const componentList = {
  Section1Col,
  Section2Col,
  Section3Col,
};

export type Props = {
  componentName?: string,
  templateName: string,
  uiConfig: Object,
  info: Object,
};

export function Template({ componentName, templateName, uiConfig, info, ...rest }: Props): React.Node {
  const Tag = componentList[templateName];

  if (!Tag && !info) {
    console.error('FIXME: TEMPLATE', templateName, componentName, uiConfig, info);
    return null;
  }
  return <Tag {...uiConfig} info={info} />;
}

export const TemplateData = {
  componentName: 'WhatIsMasterTrack',
  templateName: 'Section2Col',
  uiConfig: {
    backgroundColor: '#f5f7fa',
    blurbName: 'BlurbIconLeft',
  },
  info: {
    title: 'What is a MasterTrack Certificate?',
    subtitle:
      'With a MasterTrack Certificate, you can earn a powerful career credential for a breakthrough price. We’ve split in-demand Master’s programs into modules so you can learn career skills anytime using the web or your mobile device. ',
    blurbs: [
      {
        icon: 'SvgGraduationCap',
        iconColor: '#e45555',
        title: 'Master’s Degree Learning',
        description: "A MasterTrack Certificate enables you to enroll in a section of a full Master's degree program",
      },
      {
        icon: 'SvgLayer',
        iconColor: '#6876a7',
        title: 'Be Job Ready',
        description: 'Gain career-relevant skills that attract attention from recruiters and hiring managers',
      },
      {
        icon: 'SvgMembers',
        iconColor: '#51c1e9',
        title: 'Boost Your Resume',
        description: 'Receive a MasterTrack Certificate that you can add to your resume & LinkedIn profile',
      },
      {
        icon: 'SvgStackedFile',
        iconColor: '#7d1f86',
        title: 'Engaging and Innovative',
        description: 'Collaborate with peers and get feedback from professors & industry experts',
      },
    ],
  },
};
export default compose(withProps(() => TemplateData))(Template);
