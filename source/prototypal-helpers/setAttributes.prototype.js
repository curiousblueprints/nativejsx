(function () {
  window.nativejsx = window.nativejsx || {}
  if (typeof window.nativejsx.setAttributes !== 'function') {
    window.nativejsx.setAttributes = function (item, attributes) {
      return require('./setAttributes.js')(item, attributes)
    }
  }
})()
