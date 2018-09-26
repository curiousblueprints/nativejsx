(function () {
  window.nativejsx = window.nativejsx || {}
  if (typeof window.nativejsx.appendChildren !== 'function') {
    window.nativejsx.appendChildren = function (item, children) {
      return require('./appendChildren.js')(item, children)
    }
  }
})()
