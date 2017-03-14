namespace Stock {
    export class DAL {
        public static getMoreFAQ(url: string): JQueryPromise<string> {
            var promise: JQueryPromise<string>;

            promise = $.ajax({
                type: 'GET',
                url: url
            });

            return promise;
        }

    }
}