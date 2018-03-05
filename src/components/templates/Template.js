// @flow
import * as React from 'react';
import { compose } from 'recompose';

import Section1Col from 'src/components/templates/Section1Col';
import Section2Col from 'src/components/templates/Section2Col';
import Section3Col from 'src/components/templates/Section3Col';

import withXDPData from 'src/components/shared/withXDPData';

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

export function Template({
  componentName,
  templateName,
  uiConfig,
  info,
  ...rest
}: Props): React.Node {
  const Tag = componentList[templateName];

  if (!Tag && !info) {
    console.error('FIXME: TEMPLATE', templateName, componentName, uiConfig, info);
    return null;
  }
  return <Tag {...uiConfig} info={info} />;
}

export default compose(
  withXDPData(({ templateData }, { componentName }) => {
    const { templateName, uiConfig, info } = templateData[componentName] || {};
    return {
      componentName,
      templateName,
      uiConfig,
      info,
    };
  }),
)(Template);
