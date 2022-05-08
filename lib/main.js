(function() {
    'use strict';
    var gameboySoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return gameboySoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = gameboySoftList;
    } else {
        window.gameSoft = {
            GB: gameboySoftList
        };
    }
})();