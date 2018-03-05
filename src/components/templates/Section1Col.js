// @flow
import * as React from 'react';
import { Row, Col } from '@coursera/coursera-ui';

import Blurb from 'src/components/templates/Blurb';
import SectionTitle from 'src/components/templates/SectionTitle';
import Wrapper from 'src/components/templates/Wrapper';

import type { Props as BlurbProps } from 'src/components/templates/Blurb';

type Props = {
  isFullwidth?: boolean,
  backgroundColor: string,
  backgroundImage?: string,
  blurbName?: string,
};

type Section1ColProps = {
  info: {
    title?: string,
    subtitle?: string,
    blurbs: [BlurbProps],
  },
};

export default function Section1Col({
  isFullwidth,
  backgroundColor,
  backgroundImage,
  blurbName,
  info: { title, subtitle, blurbs },
}: Props & Section1ColProps) {
  return (
    <Wrapper
      rootClassName="text-xs-center p-y-5"
      isFullwidth={isFullwidth}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <SectionTitle title={title} subtitle={subtitle} />
      <Row rootClassName="text-xs-center">
        {blurbs.map(blurb => (
          <Col xs={12} key={blurb.title}>
            <div className="p-a-1">
              <Blurb blurbName={blurbName} {...blurb} />
            </div>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}
