chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'alwaysOnTop' : true,
    'outerBounds': {
      'width': 315,
      'height': 330
    }
  });
});
