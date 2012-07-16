chrome.extension.sendRequest({type: 'GET_CONFIG'}, function(config) {
  var fn = function(node) {
    if (node.nodeName === 'A') {
      var rule = config.site[node.hostname] || config.global;
      if (rule === 'ALL' || (rule === 'DIFF_DOMAIN' && location.host !== node.hostname)) {
        if (!/(?:^|\s)noreferrer(?:$|\s)/.test(node.rel)) {
          node.rel = (node.rel + ' noreferrer').trim();
        }
      }
    }
    else if (node.parentNode) {
      fn(node.parentNode);
    }
  };

  document.documentElement.addEventListener('click', function(e) {
    fn(e.target);
  }, false);
  document.documentElement.addEventListener('mouseup', function(e) {
    fn(e.target);
  }, false);
});
