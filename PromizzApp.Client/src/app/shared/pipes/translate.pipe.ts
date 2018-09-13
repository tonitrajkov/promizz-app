import { Pipe, PipeTransform } from '@angular/core';

import { Localization } from '../globals';

@Pipe({ name: 't' })
export class TranslatePipe implements PipeTransform {

    constructor() { }

    transform(key: string): string {
        if (!!!key) {
            return null;
        }

        if (Localization.localization.hasOwnProperty(key)) {
            return Localization.localization[key];
        }
        
        return key;
    }
}