/// <reference path="../typings/jquery/jquery.d.ts" />
namespace Stock {
    export class Home {

        public constructor() {

        }

        public init() {
            this.hideNav();
            this.mobileMenuHide();
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
            }, 500);
        }

        public static initMap() {

        }


    }
}