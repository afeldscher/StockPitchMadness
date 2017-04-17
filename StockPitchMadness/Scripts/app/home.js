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
                _this.mobileMenuHide();
                _this.socialIcons();
                _this.navToggleAnimation();
                _this.pageAnimations();
                $("#viewMoreFAQ").click(function () { _this.viewMoreFAQ(); });
                $(window).scroll();
            });
        };
        Home.prototype.mobileMenuHide = function () {
            $("body").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    $('.navbar-collapse').collapse('toggle');
                    $('.navbar-toggle').removeClass('collapsed');
                }
            });
            $(".nav-link").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    $('.navbar-collapse').collapse('toggle');
                    $('.navbar-toggle').removeClass('collapsed');
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
                Home.$animation_elements = $('.animation-element');
            }
            else if (!this.faqLoaded) {
                var promise = Stock.DAL.getMoreFAQ(this.FAQ_URL);
                promise.done(function (data) {
                    _this.faqOpened = true;
                    _this.faqLoaded = true;
                    _this.faqData = $(data).hide();
                    $('.questionsContainer').append(_this.faqData);
                    _this.faqData.slideDown(600, function () { $(window).scroll(); });
                    $('#viewMoreFAQ').html("View Less");
                    Home.$animation_elements = $('.animation-element');
                });
            }
            else {
                _this.faqData.slideDown(600, function () { $(window).scroll(); });
                this.faqOpened = true;
                $('#viewMoreFAQ').html("View Less");
                Home.$animation_elements = $('.animation-element');
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
        Home.prototype.navToggleAnimation = function () {
            $('.navbar-toggle').click(function () {
                var state = $('.navbar-collapse').attr('aria-expanded');
                if (state || state == undefined) {
                    $(this).addClass('collapsed');
                }
                else {
                    $(this).removeClass('collapsed');
                }
            });
        };
        Home.prototype.pageAnimations = function () {
            var $window = $(window);
            $window.on('scroll', check_if_in_view);
            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
            Home.$animation_elements = $('.animation-element');
            var _this = this;
            function check_if_in_view() {
                var window_height = $window.height() - 50;
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);
                $.each(Home.$animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);
                    //check to see if this current container is within viewport
                    if ((element_bottom_position * .95 >= window_top_position) &&
                        (element_top_position <= window_bottom_position)) {
                        $element.addClass('in-view');
                    } /*else {
                        $element.removeClass('in-view');
                    }*/
                });
            }
        };
        return Home;
    })();
    Stock.Home = Home;
})(Stock || (Stock = {}));
//# sourceMappingURL=home.js.map