'use strict';

/**
 * Tests for YouTube Player API.
 */
describe('YouTube Player API', function() {
    var YT = window.YT;
    var assert = window.chai.assert;

    before(function() {
        // inject HTML fixture
        document.body.insertAdjacentHTML(
            'beforeend',
            '<p id="player"></p>'
        );
    });

    it('has loaded on the page', function() {
        assert(YT);
        assert(YT.Player);
    });

    it('can create an iframe video', function(done) {
        new YT.Player('player', {
            videoId: 'M7lc1UVf-VE',
            events: {
                onReady: function(event) {
                    assert(event);
                    assert(event.target);
                    done();
                }
            }
        });
    });
});
