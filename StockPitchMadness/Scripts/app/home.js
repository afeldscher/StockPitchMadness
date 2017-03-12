/// <reference path="../typings/jquery/jquery.d.ts" />
var Stock;
(function (Stock) {
    var Home = (function () {
        function Home() {
        }
        Home.prototype.init = function () {
            this.hideNav();
        };
        Home.prototype.hideNav = function () {
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > window.innerHeight - 100) {
                    $('.navbar').fadeIn();
                }
                else {
                    $('.navbar').fadeOut();
                }
            });
        };
        return Home;
    }());
    Stock.Home = Home;
})(Stock || (Stock = {}));
