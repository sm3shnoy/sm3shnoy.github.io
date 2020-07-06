(function() {
  var tablist = document.querySelector('.tabs');
  var tabs = tablist.querySelectorAll('a');
  var panels = document.querySelectorAll('[id^="section"]');

  var switchTab = (oldTab, newTab) => {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    
    var index = Array.prototype.indexOf.call(tabs, newTab);
    var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }

  tablist.setAttribute('role', 'tablist');

  Array.prototype.forEach.call(tabs, (tab, i) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('id', 'tab' + (i + 1));
      tab.setAttribute('tabindex', '-1');
      tab.parentNode.setAttribute('role', 'presentation');

      // Handle clicking of tabs for mouse users
      tab.addEventListener('click', e => {
      e.preventDefault();
      var currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
          switchTab(currentTab, e.currentTarget);
      }
    });

    tab.addEventListener('keydown', e => {
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget);

      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : null;

      if (dir !== null) {
        e.preventDefault();

        dir === switchTab(e.currentTarget, tabs[dir]);
      }
    });
  });

  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    // panel.setAttribute('tabindex', '-1');
    var id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true; 
  });

  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})();
