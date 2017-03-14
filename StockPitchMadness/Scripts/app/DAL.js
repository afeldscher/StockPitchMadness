var Stock;
(function (Stock) {
    var DAL = (function () {
        function DAL() {
        }
        DAL.getMoreFAQ = function (url) {
            var promise;
            promise = $.ajax({
                type: 'GET',
                url: url
            });
            return promise;
        };
        return DAL;
    }());
    Stock.DAL = DAL;
})(Stock || (Stock = {}));
//# sourceMappingURL=DAL.js.map