require('./bootstrap');
require('./Index');

$(function() {

    $('.title').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace('Y', '<span>Y</span>'));
        ths.html(ths.html().replace('M', '<span>M</span>'));
    })
});
