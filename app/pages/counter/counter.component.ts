import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { CounterListService } from './../../shared/counter/counter-list.service'
import { Counter } from './../../shared/counter/counter'

@Component({
    selector: 'my-app',
    templateUrl: 'pages/counter/counter.html',
    styleUrls: ['pages/counter/counter-common.css']    
})

export class CounterComponent implements OnInit{
    
    selected: Counter  

    constructor(private router: Router,
                private counterListService: CounterListService){} 

    ngOnInit(){

      if(this.counterListService.getAll().length === 0){ 
        this.counterListService.select(this.counterListService.add('default'))
      }      

      this.selected = this.counterListService.getSelected() 

    }                
    
    onTap() {      

      this.counterListService.update(1)  

    }

    reboot() {

      this.counterListService.update(-this.selected.number)      

    }

    showCounters(){        

      this.router.navigate(['/list'])    
      
    }

}
