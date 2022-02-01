'use strict';

var defaultOptions = {
  selected: 'is-selected',
  draggable: 'is-draggable',
  dragging: 'is-dragging'
};

function removeClass(node, className) {
  var cl = node.classList;
  if (className && cl.contains(className)) cl.remove(className);
}
function addClass(node, className) {
  var cl = node.classList;
  if (className && !cl.contains(className)) cl.add(className);
}

function ClassNames(userOptions) {
  var options = Object.assign({}, defaultOptions, userOptions);
  var selected = options.selected,
      draggable = options.draggable,
      dragging = options.dragging;
  var selectedEvents = ['select', 'pointerUp'];
  var draggingEvents = ['pointerDown', 'pointerUp'];
  var carousel;
  var root;
  var slides;

  function init(embla) {
    carousel = embla;
    root = carousel.rootNode();
    slides = carousel.slideNodes();
    var isDraggable = carousel.internalEngine().options.draggable;

    if (isDraggable) {
      addClass(root, draggable);
    }

    if (dragging) {
      draggingEvents.forEach(function (evt) {
        return carousel.on(evt, toggleDraggingClass);
      });
    }

    if (selected) {
      selectedEvents.forEach(function (evt) {
        return carousel.on(evt, toggleSelectedClass);
      });
      toggleSelectedClass();
    }
  }

  function destroy() {
    removeClass(root, draggable);
    draggingEvents.forEach(function (evt) {
      return carousel.off(evt, toggleDraggingClass);
    });
    selectedEvents.forEach(function (evt) {
      return carousel.off(evt, toggleSelectedClass);
    });
    slides.forEach(function (slide) {
      return removeClass(slide, selected);
    });
  }

  function toggleDraggingClass(evt) {
    if (evt === 'pointerDown') addClass(root, dragging);else removeClass(root, dragging);
  }

  function toggleSelectedClass() {
    var inView = carousel.slidesInView(true);
    var notInView = carousel.slidesNotInView(true);
    notInView.forEach(function (index) {
      return removeClass(slides[index], selected);
    });
    inView.forEach(function (index) {
      return addClass(slides[index], selected);
    });
  }

  var self = {
    name: 'ClassNames',
    options: options,
    init: init,
    destroy: destroy
  };
  return self;
}

module.exports = ClassNames;
//# sourceMappingURL=embla-carousel-class-names.js.map
