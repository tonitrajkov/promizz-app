import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PromiseModel } from '../../models/promise.model';
import { Utils } from '../../globals';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'promise-grid',
    templateUrl: './promisegrid.component.html'
})
export class PromiseGridComponent implements OnInit {

    @Input() data: EventEmitter<PromiseModel[]>;
    private promiseList: PromiseModel[] = Array<PromiseModel>();

    public htmlData: any;

    constructor(private sanitazer: DomSanitizer) { }

    public ngOnInit() {
        this.data.subscribe((promises: PromiseModel[]) => {
            this.drawGrid(promises);
            // let list = this.promiseList.concat(promises);
            // this.promiseList = list;

        });
    }

    private drawGrid(promises: PromiseModel[]) {
        let html = `<ul class="results" id="results">`;
        for (let i = 0; i < promises.length; i++) {

            let promiseTitle = this.subsPromiseTitle(promises[i].Title);
            let span = this.calculateSpanRowByPromiseTitleLen(promises[i].Title);
            let clasName = !Utils.textShouldBeWhite(promises[i].Color) ? '-light' : '-dark';
            let avatarBgClassName = 'zz-avatar-bg' + Utils.getRandomNumberFromInterval(1, 8);

            html += `<li class="-loading" style="grid-row: span ${span}">
            <div class="loader" style="animation-delay: ${i * 0.03}"></div>
            <div class="card-contents inner ${clasName}" style="background-color: ${promises[i].Color}">
                <div class="-card-tags-container"></div>
                <div class="card-title-container">
                    <div class="card-title">
                        ${promiseTitle}
                    </div>
                </div>
                <div class="card-metadata">
                    <div class="card-left-metadata">
                        <div class="assignee-duedate-container">
                            <div class="assignee-metadata">
                                <div class="zz-avatar zz-avatar-small ${avatarBgClassName}">
                                    ${promises[i].Promisee.Initials}
                                </div>
                            </div>
                            <div class="duedate-container">
                                <div class="duedate">Nov 22</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-right-metadata"></div>
                </div>
            </div>
            </li>`;
        }

        html += '</ul>'

        this.htmlData = this.sanitazer.bypassSecurityTrustHtml(html);

        setTimeout(() => {
            this.showResults(promises);
        }, 10);
    }

    private showResults(promises: PromiseModel[]) {
        const times = this.shuffle(
            Array.from({ length: promises.length }, (_, i) => i * 0.03)
        );

        let elements = document.getElementsByClassName('-loading');
        let len = elements.length;

        while (len > 0) {
            var li = elements[len - 1];
            li.className = '';

            var div = li.getElementsByClassName('inner')[0];
            this.setDelay(times[len], div);

            len--;
        }
    }

    private setDelay(i: any, div: any) {
        setTimeout(() => {
            div.className += ' -show';
        }, i * 1000);
    }

    private calculateSpanRowByPromiseTitleLen(promiseTitle: string): number {
        let len = promiseTitle.length;
        let span: number;

        if (len < 50) {
            span = Utils.getRandomNumberFromInterval(4, 5);
            return span;
        }

        if (len >= 50 && len <= 70) {
            span = Utils.getRandomNumberFromInterval(5, 6);
            return span;
        }

        if (len > 70 && len <= 180) {
            span = Utils.getRandomNumberFromInterval(7, 8);
            return span;
        }

        if (len > 180 && len <= 280) {
            span = Utils.getRandomNumberFromInterval(9, 10);
            return span;
        }

        if (len > 280) {
            span = Utils.getRandomNumberFromInterval(11, 12);
            return span;
        }
    }

    private subsPromiseTitle(promiseTitle: string): string {
        let len = promiseTitle.length;
        let span: number;

        if (len < 50) {

        }

        if (len >= 50 && len <= 70) {

        }

        if (len > 70 && len <= 100) {

        }

        if (len > 100 && len <= 220) {

        }

        if (len > 220) {
            return promiseTitle.substr(0, 519) + '...';
        }

        return promiseTitle;
    }

    private generateGrid(promises: PromiseModel[]): any[] {
        const results = document.getElementById('results');
        const elements = [];

        for (let i = 0; i < promises.length; i++) {
            const el = document.createElement('li');
            const height = Utils.getRandomNumberFromInterval(1, 3);
            const loader = document.createElement('div');
            loader.className = 'loader';
            loader.style.animationDelay = `${i * 0.03}s`;

            el.className = '-loading';

            // el.style.gridRow = (
            //     height === 1 ? 'span 5'
            //         : height === 2 ? 'span 7'
            //             : 'span 9'
            // );

            el.appendChild(loader);
            results.appendChild(el);
            elements.push(el);
        }
        return elements
    }

    private showGrid(promises: PromiseModel[]) {

        const elements = this.generateGrid(promises);
        const times = this.shuffle(
            Array.from({ length: promises.length }, (_, i) => i * 0.03)
        );

        elements.forEach((wrapper, i) => {

            wrapper.className = '';
            let el = document.createElement('div');
            el.className = 'inner ';
            el.style.backgroundColor = promises[i].Color;
            el.innerText = promises[i].Title;

            el.className += !Utils.textShouldBeWhite(promises[i].Color) ? '-light' : '-dark';
            // el.className += light ? '-light' : '-dark'

            setTimeout(() => {
                el.className += ' -show'
            }, times[i] * 1000);

            wrapper.appendChild(el);
        });
    }

    private shuffle(array: any[]) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}