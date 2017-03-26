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
                //this.hideNav();
                this.mobileMenuHide();
                this.socialIcons();
                $("#viewMoreFAQ").click(() => { this.viewMoreFAQ(); });
            });
        }

        private hideNav() {
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 200 /*window.innerHeight - 100*/) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        }

        private mobileMenuHide() {
            $("body").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    (<any>$('.navbar-collapse')).collapse('toggle');
                }
            });

            $(".nav-link").click(function (event) {
                // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
                if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
                    (<any>$('.navbar-collapse')).collapse('toggle');
                }
            });
        }


        public static scrollTo(name: string) {
            var height: number = $(name).offset().top;

            $('html, body').animate({
                scrollTop: height - 50
            },
                Math.sqrt(Math.abs(window.scrollY - height)) * 30

            );
        }

        public viewMoreFAQ() {
            var _this = this;

            if (this.faqOpened) { //close
                _this.faqData.slideUp(600);
                this.faqOpened = false;
                $('#viewMoreFAQ').html("View More");


            } else if (!this.faqLoaded) { //not loaded and closed
                var promise = DAL.getMoreFAQ(this.FAQ_URL);

                promise.done(function (data) {
                    _this.faqOpened = true;
                    _this.faqLoaded = true;

                    _this.faqData = $(data).hide();
                    $('.questionsContainer').append(_this.faqData);
                    _this.faqData.slideDown(600);
                    $('#viewMoreFAQ').html("View Less");

                });
            } else { //loaded and closed
                _this.faqData.slideDown(600);
                this.faqOpened = true;
                $('#viewMoreFAQ').html("View Less");
            }
        }

        private socialIcons() {
            $('.socialIcony').hover((e) => {
                $(e.target).fadeTo(400, 1);
                $('#' + e.target.id + '.socialIcon').fadeTo(400, 0);
            }, (e) => {
                $(e.target).fadeTo(400, 0);
                $('#' + e.target.id + '.socialIcon').fadeTo(400, 1);
            });

        }

        private masonry() {
            var m = new Masonry($('.grid').get()[0], {
                itemSelector: ".thumbnail"
            });
        }

    }
}