// @flow
import * as React from 'react';
import { Box, Label } from '@coursera/coursera-ui';
import { SvgArrowDown, SvgArrowRight } from '@coursera/coursera-ui/svg';

import { compose, withStateHandlers } from 'recompose';

import Measure from 'react-measure';

type RenderExpandBtnProps = {
  isExpanded: boolean,
  toggleExpand: () => void,
  expandedText: string,
  collapsedText: string,
};

type Props = {
  onResize: ({ bounds: { height: number } }) => void,
  toggleExpand: () => void,
  containerHeight: number,
  isExpanded: boolean,
  dataList: Array<Object>,
  defaultDisplayItemCount?: number,
  renderItem: (dataItem: Object) => React.Node,
  expandedText?: string,
  collapsedText?: string,
  renderExpandBtn?: ({}) => React.Node,
};

function renderExpandBtnFn({ toggleExpand, isExpanded, expandedText, collapsedText }: RenderExpandBtnProps) {
  return (
    <Box
      onClick={toggleExpand}
      onKeyPress={toggleExpand}
      rootClassName="text-xs-center text-secondary border-a p-y-1s text-uppercase font-sm"
      alignItems="center"
      justifyContent="center"
    >
      {isExpanded ? <SvgArrowDown /> : <SvgArrowRight />}
      <Label className="p-l-1" tag="span">
        {isExpanded ? expandedText : collapsedText}
      </Label>
    </Box>
  );
}

function ExpandableSections({
  containerHeight,
  onResize,
  toggleExpand,
  isExpanded,
  defaultDisplayItemCount = 1,
  dataList = [],
  renderItem = () => {},
  expandedText = 'View All',
  collapsedText = 'View Less',
  renderExpandBtn = renderExpandBtnFn,
  ...rest
}: Props) {
  const displayDataList = isExpanded ? dataList : dataList.slice(0, defaultDisplayItemCount);

  return (
    <div className="ExpandableSections slow-transition" style={{ height: containerHeight }}>
      <Measure bounds onResize={onResize}>
        {({ measureRef }) => (
          <div ref={measureRef}>
            {displayDataList.map((item, index) => renderItem(item, index))}
            {dataList.length > defaultDisplayItemCount &&
              renderExpandBtn({ toggleExpand, isExpanded, expandedText, collapsedText })}
          </div>
        )}
      </Measure>
    </div>
  );
}

export default compose(
  withStateHandlers(
    {
      isExpanded: false,
      containerHeight: 400,
    },
    {
      toggleExpand: ({ isExpanded }) => () => ({
        isExpanded: !isExpanded,
      }),
      onResize: () => contentRect => ({
        containerHeight: contentRect.bounds.height,
      }),
    }
  )
)(ExpandableSections);
