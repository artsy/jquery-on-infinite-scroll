(function() {

  var onScroll = function(e) {
    if ($.active != 0) return;

    if (e.data) {
      var offset = e.data.offset;
    };

    if (offset === undefined) {
      offset = $(window).height() * 0.7;
    }
    var viewPortBottom = $(window).scrollTop() + $(window).height(),
      breakPoint = $(document).height() - offset;
      reachedBottom = viewPortBottom >= breakPoint;

    if (!reachedBottom) return;
    $(window).trigger('infiniteScroll');
  };

  $.onInfiniteScroll = function(callback, options) {
    $(window).on('infiniteScroll', callback);
    $(window).on('scroll', options, onScroll);
  };

  $.destroyInfiniteScroll = function() {
    $(window).off('infiniteScroll');
    $(window).off('scroll');
  };


})();