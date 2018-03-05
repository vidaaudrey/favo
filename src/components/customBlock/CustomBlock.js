// @flow
import * as React from 'react';
import { compose, withProps } from 'recompose';

import CustomBlockWrapper from 'src/components/customBlock/CustomBlockWrapper';
import CustomBlockSimple from 'src/components/customBlock/CustomBlockSimple';
import CustomBlockGrid from 'src/components/customBlock/CustomBlockGrid';

import { CustomBlockConfig } from 'src/types/sharedTypes';

const BLOCK_TYPES = { SIMPLE: 'SIMPLE', GRID: 'GRID' };

type Props = {
  config: CustomBlockConfig,
  propsConfig: Object,
  uiConfig: Object,
};

function CustomBlock({ config, config: { uiConfig } }: Props): React.Node {
  let htmlMarkup = null;
  if (config.type === BLOCK_TYPES.SIMPLE) {
    htmlMarkup = <CustomBlockSimple {...config} />;
  }
  if (config.type === BLOCK_TYPES.GRID) {
    htmlMarkup = <CustomBlockGrid {...config} />;
  }

  if (uiConfig) {
    return <CustomBlockWrapper uiConfig={uiConfig}>{htmlMarkup}</CustomBlockWrapper>;
  }
  return htmlMarkup;
}

export const CustomBlockData = {
  id: 'cjdah86yc1yj80179uayvcc1b',
  type: 'SIMPLE',
  componentName: 'PartnerMarketingSection',
  version: 1,
  pages: [
    {
      id: 'cjdjieh9yfvzd0177cw46rjq1',
      pageDomain: 'DDP',
    },
  ],
  config: {
    type: 'SIMPLE',
    uiConfig: {
      componentName: 'PartnerMarketingSection',
    },
    contents: [
      {
        type: 'HTML',
        value: '<h1> CustomBlockSimple 1 (PartnerMarketingSection)</h1><strong>HTML !</strong> ',
        uiConfig: {
          className: 'p-a-2 text-xs-center',
        },
      },
    ],
  },
};

export default compose(withProps(() => CustomBlockData))(CustomBlock);
