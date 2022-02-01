'use strict';

var defaultOptions = {
  destroyHeight: 'auto'
};

function AutoHeight(userOptions) {
  var options = Object.assign({}, defaultOptions, userOptions);
  var destroyHeight = options.destroyHeight;
  var heightEvents = ['select', 'pointerUp'];
  var inViewThreshold = 0.5;
  var carousel;
  var slideBounds = [];
  var slideHeights = [];

  function init(embla) {
    carousel = embla;

    var _a = carousel.internalEngine(),
        options = _a.options,
        slidesInView = _a.slidesInView,
        slideRects = _a.slideRects;

    if (options.axis === 'y') return;
    slideBounds = slidesInView.findSlideBounds(undefined, inViewThreshold);
    slideHeights = slideRects.map(function (rect) {
      return rect.height;
    });
    heightEvents.forEach(function (evt) {
      return carousel.on(evt, setContainerHeight);
    });
    setContainerHeight();
  }

  function destroy() {
    heightEvents.forEach(function (evt) {
      return carousel.off(evt, setContainerHeight);
    });
    setContainerHeight('destroy');
  }

  function highestInView() {
    var _a = carousel.internalEngine(),
        slidesInView = _a.slidesInView,
        target = _a.target;

    var inViewIndexes = slidesInView.check(target.get(), slideBounds);
    var heights = inViewIndexes.map(function (index) {
      return slideHeights[index];
    });
    return heights.reduce(function (a, b) {
      return Math.max(a, b);
    }, 0);
  }

  function setContainerHeight(evt) {
    var height = evt === 'destroy' ? destroyHeight : highestInView() + "px";
    carousel.containerNode().style.height = height;
  }

  var self = {
    name: 'AutoHeight',
    options: options,
    init: init,
    destroy: destroy
  };
  return self;
}

module.exports = AutoHeight;
//# sourceMappingURL=embla-carousel-auto-height.js.map
