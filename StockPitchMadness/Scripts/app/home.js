/// <reference path="../typings/jquery/jquery.d.ts" />
var Stock;
(function (Stock) {
    var Home = (function () {
        function Home(faqUrl) {
            this.FAQ_URL = faqUrl;
        }
        Home.prototype.init = function () {
            var _this = this;
            $(document).ready(function () {
                //this.hideNav();
                _this.mobileMenuHide();
                _this.socialIcons();
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
            var winHeight = window.scrollY || document.documentElement.scrollTop;
            $('body, html').animate({
                scrollTop: height - 50
            }, (Math.sqrt(Math.abs(winHeight - height)) * 30));
        };
        Home.prototype.viewMoreFAQ = function () {
            var _this = this;
            if (this.faqOpened) {
                _this.faqData.slideUp(600);
                this.faqOpened = false;
                $('#viewMoreFAQ').html("View More");
            }
            else if (!this.faqLoaded) {
                var promise = Stock.DAL.getMoreFAQ(this.FAQ_URL);
                promise.done(function (data) {
                    _this.faqOpened = true;
                    _this.faqLoaded = true;
                    _this.faqData = $(data).hide();
                    $('.questionsContainer').append(_this.faqData);
                    _this.faqData.slideDown(600);
                    $('#viewMoreFAQ').html("View Less");
                });
            }
            else {
                _this.faqData.slideDown(600);
                this.faqOpened = true;
                $('#viewMoreFAQ').html("View Less");
            }
        };
        Home.prototype.socialIcons = function () {
            $('.socialIcony').hover(function (e) {
                $(e.target).fadeTo(300, 1);
                $('#' + e.target.id + '.socialIcon').fadeTo(300, 0);
            }, function (e) {
                $(e.target).fadeTo(300, 0);
                $('#' + e.target.id + '.socialIcon').fadeTo(300, 1);
            });
        };
        return Home;
    }());
    Stock.Home = Home;
})(Stock || (Stock = {}));
//# sourceMappingURL=home.js.map