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

    public static getRandomNumberFromInterval(min, max): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static hexToRgb(hex) {
        let bigint = parseInt(hex.substr(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        return { r, g, b };
    }

    public static getCorrectTextColor(hex): string {
        let threshold = 130;

        // var rgb = Utils.hexToRgb(hex);
        // let hRed = rgb.r;
        // let hGreen = rgb.g;
        // let hBlue = rgb.b;
        var hRed = hexToR(hex);
        var hGreen = hexToG(hex);
        var hBlue = hexToB(hex);

        function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
        function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
        function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
        function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }

        let cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;

        if (cBrightness > threshold) {
            return "#000000";
        }

        return "#ffffff";
    }

    public static textShouldBeWhite(hex): boolean {
        let color = Utils.getCorrectTextColor(hex);

        if (color.indexOf('#f') != -1) {
            return true;
        }
        return false;
    }
}