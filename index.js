(function() {

  var onScroll = function(e) {
    if ($.active != 0) return;

    var offset = e.data.offset;

    if (offset === undefined) {
      offset = $(window).height() * 0.7;
    }
    var viewPortBottom = $(window).scrollTop() + $(window).height(),
      breakPoint = $(document).height() - offset;
      reachedBottom = viewPortBottom >= breakPoint;

    if (!reachedBottom) return;
    $(window).trigger('infiniteScroll');
  };

  $.onInfiniteScroll = function(callback, offset) {
    $(window).on('infiniteScroll', callback);
    $(window).on('scroll', { offset: offset}, onScroll);
  };

  $.destroyInfiniteScroll = function(callback, offset) {
    $(window).off('infiniteScroll');
    $(window).off('scroll');
  };


})();