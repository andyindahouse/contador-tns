import { Injectable, NgZone } from "@angular/core";
import { Counter } from './counter'

import { CounterFS as CounterDAO } from './counter-fs'

@Injectable()
export class CounterListService {

    selected: Counter
    counters: Array<Counter> = []
    
    constructor(private zone: NgZone, private counterDao: CounterDAO){}

    init(){

        this.counterDao.read()
            .then(res => {

                if(res){
                    this.counters = JSON.parse(res)
                    this.select(this.counters[0])
                }

            })
            .catch(err => console.log(err))
            
    }

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
        this.counters.unshift(counter)        
        this.counterDao.write(JSON.stringify(this.counters))

        return counter
    }

    del(index: number): number{

        this.zone.run(() => {
            return this.counters.splice(index, 1)
        })
        this.counterDao.write(JSON.stringify(this.counters))
        
        return index
    }     

    update(number: number){

        this.selected.number = this.selected.number + number
        this.counterDao.write(JSON.stringify(this.counters))        

        return this.selected.number
    }
    
}