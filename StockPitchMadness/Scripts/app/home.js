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
                if (y > 200 /*window.innerHeight - 100*/) {
                    $('.navbar').fadeIn();
                }
                else {
                    $('.navbar').fadeOut();
                }
            });
        };
        Home.scrollTo = function (name) {
            var height = $(name).offset().top;
            $('html, body').animate({
                scrollTop: height - 50
            }, 500);
        };
        return Home;
    }());
    Stock.Home = Home;
})(Stock || (Stock = {}));
//# sourceMappingURL=home.js.map