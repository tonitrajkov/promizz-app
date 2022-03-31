import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { icons } from 'feather-icons';

@Pipe({ name: 'feather' })
export class FeatherIconsPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(icon: string, className: string = '') {
        return this.sanitizer.bypassSecurityTrustHtml(icons[icon].toSvg({
            'class': className
        }));
    }
}

// https://feathericons.com/
// https://www.npmjs.com/package/feather-icons
