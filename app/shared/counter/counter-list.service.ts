import { Injectable } from "@angular/core";

import { Counter } from './counter'

@Injectable()
export class CounterListService {

    selected: Counter
    counters: Array<Counter> = [];

    getSelected(): Counter{

        return this.selected
    }

    getAll(): Array<Counter>{

        return this.counters
    }

    select(counter: Counter): Counter {

        let index = this.counters.indexOf(counter)
        this.selected = this.counters[index]

        return this.selected
    }

    add(name: string): Counter{

        let counter = new Counter(name, 0)
        this.counters.push(counter)

        return counter
    }

    delete(item: Counter): Counter{

        let index = this.counters.indexOf(item)
        this.counters.splice(index, 1)

        return item
    }

    update(number: number){

        return (
            this.selected.number = this.selected.number + number
        )
    }
    
}