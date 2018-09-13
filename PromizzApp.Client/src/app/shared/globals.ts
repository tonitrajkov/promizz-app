import * as $ from 'jquery';

export abstract class Localization {
    public static localization: any;

    public static setLocalization(localization: any) {
        this.localization = localization;
    }

    public static getLocalization(): any {
        return this.localization;
    }
}

export abstract class Utils {

    public static syncAjax(url: string, data: any, success: any, method: any) {

        var ajaxSettings = {
            mode: "queue",
            url: url,
            async: false,
            cache: false,
            contentType: "application/json; charset=utf-8",
            type: method,
            data: JSON.stringify(data),
            dataType: "json",
            success: function (d: any, s: any, x: any) {
                if (d.hasOwnProperty("d")) {
                    var response = JSON.parse(d.d);
                } else {
                    response = d;
                }
                success(response);
            }
        };

        $.ajax(ajaxSettings);
    }
}