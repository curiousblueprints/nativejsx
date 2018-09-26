(function () {
  window.nativejsx = window.nativejsx || {}
  if (typeof window.nativejsx.setStyles !== 'function') {
    window.nativejsx.setStyles = function (item, styles) {
      return require('./setStyles.js')(item, styles)
    }
  }
})()
