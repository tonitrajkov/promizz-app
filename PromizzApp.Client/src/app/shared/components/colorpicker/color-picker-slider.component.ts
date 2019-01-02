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
        Name: '#1BB7F8',
        IsDefault: true
    },
    {
        Name: '#65901C',
        IsDefault: false
    },
    {
        Name: '#F49423',
        IsDefault: false
    },
    {
        Name: '#67DAF1',
        IsDefault: false
    },
    {
        Name: '#A43C44',
        IsDefault: false
    },
    {
        Name: '#FB3B3D',
        IsDefault: false
    },
    {
        Name: '#D15A92',
        IsDefault: false
    },
    {
        Name: '#B6DC92',
        IsDefault: false
    },
    {
        Name: '#F192C7',
        IsDefault: false
    },
    {
        Name: '#F1DC66',
        IsDefault: false
    },
    {
        Name: '#FBDCA7',
        IsDefault: false
    }
];
