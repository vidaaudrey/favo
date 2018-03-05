// @flow
import * as React from 'react';
import { Container, Row, Col } from '@coursera/coursera-ui';
import contentTypes from 'src/components/customBlock/contentTypes';

import CustomBlockWrapper from 'src/components/customBlock/CustomBlockWrapper';

import { getUIConfigProps } from 'src/utils/common';

const BLOCK_TYPES = { SIMPLE: 'SIMPLE', GRID: 'GRID' };

type RowType = Object;

type Props = {
  uiConfig: Object,
  hocConfig: Object,
  id: string,
  type: BLOCK_TYPES.GRID,
  container: {
    rows: Array<RowType>,
  },
};

export default function CustomBlockGrid({ hocConfig, uiConfig, id, type, container, ...rest }: Props) {
  const containerUiProps = getUIConfigProps({ uiConfig: container.uiConfig });

  return (
    <CustomBlockWrapper uiConfig={uiConfig}>
      <Container {...containerUiProps}>
        {container.rows.map(({ id: rowId, uiConfig: rowUiConfig, cols }) => {
          const rowUiProps = getUIConfigProps({ uiConfig: rowUiConfig });

          return (
            <Row {...rowUiProps} key={rowId}>
              {cols.map(({ uiConfig: colUiConfig, contents, id: colId }) => {
                const colUiProps = getUIConfigProps({ uiConfig: colUiConfig });

                return (
                  <Col {...colUiProps} key={colId}>
                    {contents.map(({ type: contentType, value, wrapperUIConfig, ...rest }, index) => {
                      const key = `${contentType}~${index}`;
                      const Tag = contentTypes[contentType];
                      if (Tag) {
                        if (wrapperUIConfig) {
                          return (
                            <CustomBlockWrapper uiConfig={wrapperUIConfig} key={key}>
                              <Tag value={value} {...rest} />
                            </CustomBlockWrapper>
                          );
                        }
                        return <Tag key={key} value={value} {...rest} />;
                      }
                      return null;
                    })}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </CustomBlockWrapper>
  );
}
