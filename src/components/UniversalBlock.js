// @flow
import * as React from 'react';
import { compose, withProps, setDisplayName } from 'recompose';
import DummyBlock from 'src/components/shared/DummyBlock';

import * as ALL_CONFIG_COMPONENTS_WIHT_HOC from 'src';

type Props = {
  id: string,
  type: string,
  componentName: string,
  hiddenBlockNames: Array<string>,
};

function UniversalBlock({ id, type, componentName: componentNameAlt, hiddenBlockNames }: Props) {
  const componentName = type === 'TEMPLATE' ? 'Template' : componentNameAlt;

  const Tag = ALL_CONFIG_COMPONENTS_WIHT_HOC[componentName];

  if (!Tag) {
    // eslint-disable-next-line
    console.error('FIXME', componentNameAlt);
  }

  return (
    <div className="UniversalBlockProd">
      {!Tag && <DummyBlock key={id} componentName={componentName} />}
      {Tag && <Tag componentName={componentNameAlt} />}
    </div>
  );
}

const UniversalBlockData = {
  id: 'abc',
  type: 'ENG',
  componentName: 'Banner',
};

export default compose(setDisplayName('UniversalBlockHOC'), withProps(() => UniversalBlockData))(UniversalBlock);
