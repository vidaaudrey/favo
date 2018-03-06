// import 'antd/dist/antd.css';
import '@coursera/coursera-ui/css/reboot.css';
import '@coursera/coursera-ui/css/utilities.css';
import '@coursera/coursera-ui/css/coursera.css';

import 'src/styles/index.css';

export { default as UniversalBlock } from './components/UniversalBlock';
export { default as Template, Template as TemplateBase } from './components/templates/Template';

export { default as CustomBlock, CustomBlock as CustomBlockBase } from './components/customBlock/CustomBlock';
export {
  default as SuccessStoriesMDP,
  SuccessStoriesMDP as SuccessStoriesMDPBase,
  SuccessStoriesMDPData,
} from './components/eng/mdp/SuccessStoriesMDP';

export {
  default as AboutMasterTrack,
  AboutMasterTrack as AboutMasterTrackBase,
  AboutMasterTrackData,
} from './components/eng/mdp/AboutMasterTrack';

export {
  default as EarnCreditMDP,
  EarnCreditMDP as EarnCreditMDPBase,
  EarnCreditMDPData,
} from './components/eng/mdp/EarnCreditMDP';
