// @flow

import * as React from 'react';

import { Content } from 'src/types/sharedTypes';
import contentTypes from 'src/components/customBlock/contentTypes';

import { getUIConfigProps } from 'src/utils/common';

const BLOCK_TYPES = { SIMPLE: 'SIMPLE', GRID: 'GRID' };

type Props = {
  id: string,
  type: BLOCK_TYPES.SIMPLE,
  contents: Array<Content>,
};

// TODO(Audrey): handle CSR prop
export default function CustomBlockSimple({ id, contents = [] }: Props) {
  return (
    <div className="CustomBlockSimple">
      {contents.map(({ type: contentType, value, uiConfig }, index) => {
        const key = `${contentType}~${index}`;
        const Tag = contentTypes[contentType];
        if (Tag) {
          const styleProp = getUIConfigProps({ uiConfig, isContent: true });
          return <Tag key={key} value={value} {...styleProp} />;
        }
        return null;
      })}
    </div>
  );
}
