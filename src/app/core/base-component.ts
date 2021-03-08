import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
    template: ''
})

export class BaseComponent implements OnDestroy {
    protected subscriptions: Array<Subscription> = [];

    ngOnDestroy() {
        this.subscriptions.forEach(item => {
            item.unsubscribe();
        });
        this.subscriptions = null;
    }
}
