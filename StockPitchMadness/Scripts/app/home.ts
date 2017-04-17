/// <reference path="../typings/jquery/jquery.d.ts" />
namespace Stock {
    export class Home {
        private FAQ_URL: string;
        private faqLoaded: boolean;
        private faqOpened: boolean;
        private faqData: JQuery;

        public constructor(faqUrl: string) {
            this.FAQ_URL = faqUrl;
        }

        public init() {
            $(document).ready(() => {
                this.mobileMenuHide();
                this.socialIcons();
                this.navToggleAnimation();
                this.pageAnimations();
                $("#viewMoreFAQ").click(() => { this.viewMoreFAQ(); });
                $(window).scroll();
            });
        }

        private mobileMenuHide() {
            $("body").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    (<any>$('.navbar-collapse')).collapse('toggle');
                    $('.navbar-toggle').removeClass('collapsed');
                }
            });

            $(".nav-link").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    (<any>$('.navbar-collapse')).collapse('toggle');
                    $('.navbar-toggle').removeClass('collapsed');
                }
            });
        }


        public static scrollTo(name: string) {
            var height: number = $(name).offset().top;

            var winHeight = window.scrollY || document.documentElement.scrollTop;

            $('body, html').animate({
                scrollTop: height - 50
            },
                (Math.sqrt(Math.abs(winHeight - height)) * 30)
            );
        }

        public viewMoreFAQ() {
            var _this = this;
            if (this.faqOpened) { //close
                _this.faqData.slideUp(600);
                this.faqOpened = false;
                $('#viewMoreFAQ').html("View More");
                Home.$animation_elements = $('.animation-element');


            } else if (!this.faqLoaded) { //not loaded and closed
                var promise = DAL.getMoreFAQ(this.FAQ_URL);

                promise.done(function (data) {
                    _this.faqOpened = true;
                    _this.faqLoaded = true;

                    _this.faqData = $(data).hide();
                    $('.questionsContainer').append(_this.faqData);
                    _this.faqData.slideDown(600, () => { $(window).scroll(); });
                    $('#viewMoreFAQ').html("View Less");
                    Home.$animation_elements = $('.animation-element');

                });
            } else { //loaded and closed
                _this.faqData.slideDown(600, () => { $(window).scroll(); });
                this.faqOpened = true;
                $('#viewMoreFAQ').html("View Less");
                Home.$animation_elements = $('.animation-element');
            }
        }

        private socialIcons() {
            $('.socialIcony').hover((e) => {
                $(e.target).fadeTo(300, 1);
                $('#' + e.target.id + '.socialIcon').fadeTo(300, 0);
            }, (e) => {
                $(e.target).fadeTo(300, 0);
                $('#' + e.target.id + '.socialIcon').fadeTo(300, 1);
            });
        }

        private navToggleAnimation() {
            $('.navbar-toggle').click(function () {
                var state = $('.navbar-collapse').attr('aria-expanded');

                if (state || state == undefined) {
                    $(this).addClass('collapsed');
                } else {
                    $(this).removeClass('collapsed');
                }
            });
        }

        private static $animation_elements;

        private pageAnimations() {
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



        }


    }
}