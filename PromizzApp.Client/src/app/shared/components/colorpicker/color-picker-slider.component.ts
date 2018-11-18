import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';

@Component({
    selector: 'color-picker-slider',
    templateUrl: './color-picker-slider.component.html'
})
export class ColorPickerSliderComponent implements OnInit {

    @Output() onSelectColor = new EventEmitter();
    private colors: Color[];
    private pickerOpened = false;
    private selectedColor: Color;
    private defaultColor: Color;

    constructor() { }

    ngOnInit(): void {
        this.defaultColor = COLORS.filter((c: Color) => c.IsDefault == true)[0];
    }

    public toggleColors(open: boolean) {
        if (this.pickerOpened) {
            this.clearColors();
        }
        else {
            this.setColors();
        }

        this.pickerOpened = !this.pickerOpened;
    }

    public getIconBgColor() {
        if (this.selectedColor) {
            return this.selectedColor.Name;
        }
        else if (this.defaultColor) {
            return this.defaultColor.Name;
        }

        return '#CCC';
    }

    public selectColor(item: Color) {
        this.selectedColor = item;
        this.onSelectColor.emit(item.Name);
        this.clearColors();
    }

    private clearColors(): void {
        this.colors = [];
    }

    private setColors(): void {
        this.colors = COLORS;
    }
}

export class Color {
    public Name: string;
    public IsDefault: boolean;
}

export const COLORS: Color[] = [
    {
        Name: '#2899F0',
        IsDefault: true
    },
    {
        Name: '#F22E6A',
        IsDefault: false
    },
    {
        Name: '#E0D10C',
        IsDefault: false
    },
    {
        Name: '#65901C',
        IsDefault: false
    },
    {
        Name: '#E52324',
        IsDefault: false
    },
    {
        Name: '#C17B4E',
        IsDefault: false
    }

];
