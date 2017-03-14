/// <reference path="../typings/jquery/jquery.d.ts" />
var Stock;
(function (Stock) {
    var Home = (function () {
        function Home() {
        }
        Home.prototype.init = function () {
            var _this = this;
            $(document).ready(function () {
                //this.hideNav();
                _this.mobileMenuHide();
                $("#viewMoreFAQ").click(function () { _this.viewMoreFAQ(); });
            });
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
        Home.prototype.mobileMenuHide = function () {
            $("body").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    $('.navbar-collapse').collapse('toggle');
                }
            });
            $(".nav-link").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    $('.navbar-collapse').collapse('toggle');
                }
            });
        };
        Home.scrollTo = function (name) {
            var height = $(name).offset().top;
            $('html, body').animate({
                scrollTop: height - 50
            }, 500);
        };
        Home.prototype.viewMoreFAQ = function () {
            $("#viewMoreFAQ").hide();
        };
        return Home;
    }());
    Stock.Home = Home;
})(Stock || (Stock = {}));
