chrome.extension.sendRequest({type: 'GET_CONFIG'}, function(config) {
  document.documentElement.addEventListener('click', function(e) {
    if (e.target.nodeName === 'A') {
      var a = e.target;

      var rule = config.site[a.hostname] || config.global;
      if (rule === 'ALL' || (rule === 'DIFF_DOMAIN' && location.host !== a.hostname)) {
        if (!/(?:^|\s)noreferrer(?:$|\s)/.test(a.rel)) {
          a.rel = (a.rel + ' noreferrer').trim();
        }
      }
    }
    else if (e.target.parentNode) {
      arguments.callee({target: e.target.parentNode});
    }
  }, false);
});
