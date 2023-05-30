class TabsAutomatic {
  constructor(groupNode) {
    this.tablistNode = groupNode;
    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));

    this.tabpanels = [];

    this.firstTab = null;

    this.lastTab = null;

    this.tabs.forEach((el) => {
      const tab = el;
      const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    });

    this.setSelectedTab(this.firstTab, false);
  }

  setSelectedTab(currentTab, setFocus = true) {
    this.tabs.forEach((el) => {
      const tab = el;
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        this.tabpanels[this.tabs.indexOf(tab)].classList.remove('is-hidden');
        if (setFocus) {
          tab.focus();
        }
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        this.tabpanels[this.tabs.indexOf(tab)].classList.add('is-hidden');
      }
    });
  }

  setSelectedToPreviousTab(currentTab) {
    if (currentTab === this.firstTab) {
      this.setSelectedTab(this.lastTab);
    } else {
      this.setSelectedTab(this.tabs[this.tabs.indexOf(currentTab) - 1]);
    }
  }

  setSelectedToNextTab(currentTab) {
    if (currentTab === this.lastTab) {
      this.setSelectedTab(this.firstTab);
    } else {
      this.setSelectedTab(this.tabs[this.tabs.indexOf(currentTab) + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    const tgt = event.currentTarget;
    let flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.setSelectedToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.setSelectedToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.setSelectedTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.setSelectedTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

window.addEventListener('load', () => {
  const categoryTabs = document.querySelectorAll('.category-tabs');
  for (let i = 0; i < categoryTabs.length; i += 1) {
    new TabsAutomatic(categoryTabs[i]);
  }
})