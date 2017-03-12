/// <reference path="../typings/jquery/jquery.d.ts" />
namespace Stock {
    export class Home {

        public constructor() {

        }

        public init() {
            this.hideNav();
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

        public static scrollTo(name: string) {
            var height: number = $(name).offset().top;

            $('html, body').animate({
                scrollTop: height - 50
            }, 500);
        }

    }
}