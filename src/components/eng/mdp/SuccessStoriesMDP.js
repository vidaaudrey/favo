// @flow
import * as React from 'react';
import { StyleSheet, css, breakPoint, color, Container, Row, Col, Label, P, H2, Box } from '@coursera/coursera-ui';
import { compose, withProps } from 'recompose';

import Avatar from 'src/components/shared/Avatar';

const PHOTO_SIZE = 80;

const styles = StyleSheet.create({
  underlay: {
    top: '-4rem',
    right: '3rem',
    bottom: 0,
    left: 0,
    [`@media (min-width: ${breakPoint.lg}px)`]: {
      borderRight: `1px solid ${color.divider}`,
      left: '40%',
      transform: 'skewX(7deg) translate(6%)',
    },
  },
});

type Employer = {
  name: string,
  title: string,
  orgName: string,
  photo: string,
  story: string,
  orgTitle: string,
};

type Learner = {
  name: string,
  title: string,
  orgName: string,
  photo: string,
  story: string,
  orgTitle: string,
};

type Props = {
  employer: Employer,
  learner: Learner,
  industryPartnersTitle: string,
};

export function SuccessStoriesMDP({ employer = {}, learner = {}, industryPartnersTitle }: Props) {
  return (
    <div className="SuccessStoriesMDP p-y-5 border-bottom">
      <Container>
        <Row>
          <Col xs={12} lg={6} rootClassName="p-b-3 p-r-3 pos-relative">
            <div {...css('pos-absolute', styles.underlay)} />
            <H2 tag="h3" rootClassName="m-b-1">
              {employer.title}
            </H2>
            <img src={employer.photo} alt={employer.orgName} />
            <P>{employer.story}</P>
            <Label rootClassName="text-secondary" tag="span">
              {employer.name} - {employer.orgTitle} at {employer.orgName}
            </Label>
          </Col>
          <Col xs={12} lg={6} rootClassName="p-b-3">
            <H2 tag="h3" rootClassName="m-b-1">
              {learner.title}
            </H2>
            <Box alignItems="center" rootClassName="m-b-2">
              <div className="m-r-2">
                <Avatar imgSrc={learner.photo} size={PHOTO_SIZE} />
              </div>
              <Label rootClassName="text-secondary" tag="span">
                {learner.name} - {learner.orgTitle} at {learner.orgName}
              </Label>
            </Box>
            <P>{learner.story}</P>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export const SuccessStoriesMDPData = {
  employer: {
    title: 'Success story from an employer',
    name: 'John Williams',
    orgTitle: 'Director of Design',
    orgName: 'Microsoft',
    photo: 'https://i.imgur.com/xmPqu6C.png',
    story:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi error qui dolor consequatur voluptatem, voluptatibus ipsum quos dignissimos magnam asperiores totam aperiam accusantium odio perspiciatis laudantium numquam assumenda fugit.',
  },
  learner: {
    title: 'from a learner',
    name: 'Karen Williams',
    orgTitle: 'Director of Design',
    orgName: 'Google',
    photo: 'https://i.imgur.com/2TLfUZt.jpg',
    story:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi error qui dolor consequatur voluptatem, voluptatibus ipsum quos dignissimos magnam asperiores totam aperiam accusantium odio perspiciatis laudantium numquam assumenda fugit.',
  },
};

export default compose(withProps(() => SuccessStoriesMDPData))(SuccessStoriesMDP);
