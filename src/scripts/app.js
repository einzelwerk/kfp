import HandyCollapse from 'handy-collapse';
import { initBenefitsSlider, initMemorableSlider, initProgramSlider, initSubscribeSlider } from './modules/sliders';
import { initAccImgTabs } from './modules/initImgTabs';

import 'normalize.css';

// Sliders
initBenefitsSlider();
initMemorableSlider();
initProgramSlider();
initSubscribeSlider();

// Accordion
// eslint-disable-next-line
new HandyCollapse();

// Img Tabs
initAccImgTabs();
