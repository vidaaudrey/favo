// @flow
import * as React from 'react';
import { color, Box, Col, Container, H2, Row, Strong, SvgButton, H2Bold, P } from '@coursera/coursera-ui';
import { compose, withProps, withStateHandlers } from 'recompose';
import { SvgGraduationCap, SvgChevronUp, SvgChevronDown } from '@coursera/coursera-ui/svg';
import cx from 'classnames';

import Measure from 'react-measure';

type Props = {
  headerSubtitle: string,
  title: string,
  subtitle: string,
  paragraph1: string,
  paragraph2: string,
  onResize: ({ bounds: { height: number } }) => void,
  isExpanded: boolean,
  toggle: () => void,
  containerHeight: number,
};

function EarnCreditMDPBase({
  headerSubtitle,
  title,
  subtitle,
  paragraph1,
  paragraph2,
  onResize,
  isExpanded,
  toggle,
  containerHeight,
  ...rest
}: Props) {
  const Icon = isExpanded ? SvgChevronUp : SvgChevronDown;

  return (
    <div className="EarnCreditMDP slow-transition bg-gray pos-relative ">
      <div className="bg-gray-light">
        <Container>
          <Row>
            <Col>
              <Box alignItems="center" rootClassName="p-y-2">
                <span className="p-r-2" align="center">
                  <SvgGraduationCap size={36} />
                </span>
                <Box flex={1} alignItems="center" flexWrap="wrap">
                  <Strong className="p-r-1">Earn Credit Towards your Masters Degree</Strong>
                  <span className="font-sm">{headerSubtitle}</span>
                </Box>
                <SvgButton
                  rootClassName="p-r-0"
                  type="noStyle"
                  size="sm"
                  onKeyPress={toggle}
                  label="LEARN MORE"
                  isThemeDark={false}
                  isChildrenOnRight={true}
                  onClick={toggle}
                  svgElement={<Icon />}
                  style={{
                    color: color.secondaryText,
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="slow-transition pos-absolute z-index-xs"
        style={{ height: containerHeight, left: 0, bottom: `-${containerHeight}px`, right: 0 }}
      >
        <Measure bounds onResize={onResize}>
          {({ measureRef }) => (
            <div ref={measureRef} className={cx('bg-white', { shadow: isExpanded })}>
              {isExpanded && (
                <Container rootClassName="p-y-5">
                  <Box justifyContent="center" rootClassName="text-max-width" flexDirection="column">
                    <H2>{title}</H2>
                    <H2Bold rootClassName="m-y-2">{subtitle}</H2Bold>
                    <Row>
                      <Col xs={12} md={6} rootClassName="p-r-2">
                        <P>{paragraph1}</P>
                      </Col>
                      <Col xs={12} md={6} rootClassName="p-r-2">
                        <P>{paragraph2}</P>
                      </Col>
                    </Row>
                  </Box>
                </Container>
              )}
            </div>
          )}
        </Measure>
      </div>
    </div>
  );
}

export const EarnCreditMDPData = {
  headerSubtitle: 'Turn MasterTrack Completion Into University Credit',
  title: 'Turn MasterTrack Completion Into University Credit',
  subtitle: 'Master of Science in Information (MSI)',
  paragraph1:
    'Those who successfully complete Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae sapiente voluptates. Facilis error dicta alias? Quia delectus perspiciatis in obcaecati minus veritatis minima asperiores optio porro totam, distinctio dolores hic necessitatibus ratione perferendis ex atque laborum assumenda illum aspernatur saepe deserunt fugiat adipisci. Doloremque nihil, similique debitis dolorem odio magnam! Ex distinctio provident harum velit, architecto nam in corporis nisi facere magnam animi nemo labore eligendi ipsam error vitae? Eveniet temporibus laudantium cupiditate, nisi delectus velit sed. Vitae atque commodi, beatae doloremque aspernatur ex harum tempora eligendi vel numquam quibusdam, delectus earum necessitatibus ut, minus dolore officia distinctio eius.',
  paragraph2:
    'Those who successfully complete Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae sapiente voluptates. Facilis error dicta alias? Quia delectus perspiciatis in obcaecati minus veritatis minima asperiores optio porro totam, distinctio dolores hic necessitatibus ratione perferendis ex atque laborum assumenda illum aspernatur saepe deserunt fugiat adipisci. Doloremque nihil, similique debitis dolorem odio magnam! Ex distinctio provident harum velit, architecto nam in corporis nisi facere magnam animi nemo labore eligendi ipsam error vitae? Eveniet temporibus laudantium cupiditate, nisi delectus velit sed. Vitae atque commodi, beatae doloremque aspernatur ex harum tempora eligendi vel numquam quibusdam, delectus earum necessitatibus ut, minus dolore officia distinctio eius.',
};

export const EarnCreditMDP = compose(
  withStateHandlers(
    {
      isExpanded: false,
      containerHeight: 0,
    },
    {
      toggle: ({ isExpanded }) => () => ({
        isExpanded: !isExpanded,
      }),
      onResize: () => contentRect => ({
        containerHeight: contentRect.bounds.height,
      }),
    }
  )
)(EarnCreditMDPBase);

export default compose(withProps(() => EarnCreditMDPData))(EarnCreditMDP);
