// @flow
import * as React from 'react';
import { color, Label, Box, Row, Col } from '@coursera/coursera-ui';
import { SvgCheck } from '@coursera/coursera-ui/svg';

type Props = {
  titleTag: string,
  learningObjectives: Array<string>,
  disableResponsive?: boolean,
};

export default function LearningObjectives({ disableResponsive, titleTag = 'h3', learningObjectives = [] }: Props) {
  if (learningObjectives.length === 0) return null;
  return (
    <div className="LearningObjectives border-a p-a-2" style={{ borderRadius: 4 }}>
      <Label tag={titleTag} rootClassName="text-secondary m-b-2">
        What you will learn{' '}
      </Label>

      <Row tag="ul" rootClassName="list-style-none p-a-0 p-l-1">
        {learningObjectives.map((objective) => {
          const htmlMarkup = (
            <Box tag="li" key={objective} rootClassName="m-b-1s">
              <span className="m-r-1">
                <SvgCheck color={color.success} />
              </span>
              {objective}
            </Box>
          );

          return disableResponsive ? (
            htmlMarkup
          ) : (
            <Col xs={12} md={6} key={objective}>
              {htmlMarkup}
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
