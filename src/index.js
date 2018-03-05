// import 'antd/dist/antd.css';
import '@coursera/coursera-ui/css/reboot.css';
import '@coursera/coursera-ui/css/utilities.css';
import '@coursera/coursera-ui/css/coursera.css';

import 'src/styles/index.css';

export { default as UniversalBlock } from './components/UniversalBlock';
export { default as CustomBlock, CustomBlock as CustomBlockBase } from './components/customBlock/CustomBlock';
export {
  default as SuccessStoriesMDP,
  SuccessStoriesMDP as SuccessStoriesMDPBase,
} from './components/eng/mdp/SuccessStoriesMDP';
export {
  default as AboutMasterTrack,
  AboutMasterTrack as AboutMasterTrackBase,
} from './components/eng/mdp/AboutMasterTrack';
