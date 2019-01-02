import { Component, OnInit } from '@angular/core';

import { CoreService } from './core/core.service';

@Component({
  selector: 'promise-app',
  templateUrl: './promise-app.component.html'
})
export class PromiseAppComponent implements OnInit {

  public favicon;
  public colors: Some[] = [];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.loadLocalizationSync();
    this.createFavicon('#0CB1F6', '#0CB1F6');

    // setTimeout(() => {
    //   this.favicon = null;
    //   this.createFavicon('#866099', '#866099');
    // }, 5000);

   // this.setColors();
  }

  public createFavicon(primary: any, secondary: any) {

    const docHead = document.getElementsByTagName('head')[0];
    const canvas = document.createElement('canvas');
    canvas.width = 192;
    canvas.height = 192;

    const primaryRgb = this.hexToRgb(primary);
    const secondaryRgb = this.hexToRgb(secondary);

    const img = new Image();
    img.onload = () => {
      let ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let { data } = imgData;

      for (let i = 0; i < data.length; i += 4) {
        let rgb = (i <= 25800 * 4 ? primaryRgb : secondaryRgb);
        data[i + 0] = rgb.r;
        data[i + 1] = rgb.g;
        data[i + 2] = rgb.b;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imgData, 0, 0);

      if (this.favicon) {
        docHead.removeChild(this.favicon);
        this.favicon = null;
      } else {
        // If first time creating favicon, suppress favicon.ico
        let suppresser = document.createElement('link');
        suppresser.rel = 'shortcut icon';
        suppresser.type = 'image/x-icon';
        suppresser.href = 'data:image/x-icon;,';
        docHead.appendChild(suppresser);
      }

      this.favicon = document.createElement('link');
      this.favicon.rel = 'shortcut icon';
      this.favicon.type = 'image/x-icon';
      this.favicon.href = canvas.toDataURL();
      docHead.appendChild(this.favicon);
    }
    img.src = '../assets/images/logo-small-black.png';
  }

  public setColors() {
    let temp: Some[] = [];
    var colPairs = new Array("00", "22", "44", "66", "99", "aa", "cc", "ff");
    for (var i = 0; i < colPairs.length; i++) {
      for (var j = 0; j < colPairs.length; j++) {
        for (var k = 0; k < colPairs.length; k++) {
          //build a hexcode
          var theColor = "#" + colPairs[i] + colPairs[j] + colPairs[k];
          var textcolor = this.getCorrectTextColor(theColor);
          temp.push({ bg: theColor, col: textcolor });
        }
      }
    }

    this.colors = temp;
  }

  private hexToRgb(hex) {
    let bigint = parseInt(hex.substr(1), 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255

    return { r, g, b }
  }

  private getCorrectTextColor(hex) {
    let threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

    // var rgb = this.hexToRgb(hex);
    // let hRed = rgb.r;
    // let hGreen = rgb.g;
    // let hBlue = rgb.b;
    var hRed = hexToR(hex);
    var hGreen = hexToG(hex);
    var hBlue = hexToB(hex);

    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

    let cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;

    if (cBrightness > threshold) { return "#000000"; } else { return "#ffffff"; }
  }
}
export class Some {
  public bg: string;
  public col: string;
}