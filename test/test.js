var benv = require('benv');

describe('onInfiniteScroll', function() {

  beforeEach(function(done) {
    benv.setup(function() {
      benv.expose({ $: require('jquery'), jQuery: require('jquery') });
      require('../index');
      done();
    });
  });

  afterEach(function() {
    $.destroyInfiniteScroll();
    benv.teardown();
  });

  it('uses the callback when you have scrolled to the bottom', function(done) {
    $.onInfiniteScroll(function() {
      done(false)
    });
    $.fn.scrollTop = function() { return 40 };
    $.fn.height = function() {
      if (this[0] == window) {
        return 50;
      }
      if (this[0] == document) {
        return 100;
      }
    };
    $(window).trigger('scroll');
  });

  it('uses optional offset', function(done) {
    $.onInfiniteScroll(function() {
      done()
    }, 50);
    $.fn.scrollTop = function() { return 0 };
    $.fn.height = function() {
      if (this[0] == window) {
        return 50;
      }
      if (this[0] == document) {
        return 100;
      }
    };
    $(window).trigger('scroll');
  });
});