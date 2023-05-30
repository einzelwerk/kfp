import HandyCollapse from 'handy-collapse';
import { initBenefitsSlider, initMemorableSlider, initProgramSlider, initSubscribeSlider, initTabsSlider } from './modules/sliders';
import { initAccImgTabs } from './modules/initImgTabs';
import './modules/Tabs'
import './modules/PlayVideo'
import './modules/ShowGallery'

import 'normalize.css';

// Sliders
initBenefitsSlider();
initMemorableSlider();
initProgramSlider();
initSubscribeSlider();
initTabsSlider();

// Accordion
// eslint-disable-next-line
new HandyCollapse();

// Img Tabs
initAccImgTabs();
