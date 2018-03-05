import * as React from "react";
import { Button } from "@coursera/coursera-ui";

class UniversalBlock extends React.Component {
  render() {
    return (
      <div>
        This is a UniversalBlock component!
        <Button type="primary" label="It Works with Coursera-UI !" />
      </div>
    );
  }
}
export default UniversalBlock;
