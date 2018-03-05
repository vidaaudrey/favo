import * as React from 'react';
import { Button } from '@coursera/coursera-ui';

class CustomBlock extends React.Component {
  render() {
    return (
      <div>
        This is a CustomBlock component!
        <Button type="primary" label="It Works with Coursera-UI !" />
      </div>
    );
  }
}

export default CustomBlock;
