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
                if (y > window.innerHeight) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        }

    }
}