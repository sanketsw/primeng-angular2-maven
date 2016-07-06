import {Component} from '@angular/core';
import {Accordion} from 'primeng/primeng';
import {AccordionTab} from 'primeng/primeng';
import {Message, Growl} from 'primeng/primeng';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ],
    directives: [Accordion, AccordionTab, Growl]
})
export class HomeComponent {
    msgs: Message[];


    onTabClose(event) {
        this.msgs = [];
        console.log('Tab Closed');
        this.msgs.push({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event) {
        this.msgs = [];
        console.log('Tab Opened');
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
