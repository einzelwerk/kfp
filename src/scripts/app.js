import HandyCollapse from 'handy-collapse';
import { initBenefitsSlider, initMemorableSlider, initProgramSlider } from './modules/sliders';
import { initAccImgTabs } from './modules/initImgTabs';

import 'normalize.css';

// Accordion
// eslint-disable-next-line
new HandyCollapse();

// Img Tabs
initAccImgTabs();

// Sliders
initBenefitsSlider();
initMemorableSlider();
initProgramSlider();
