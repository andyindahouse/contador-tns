import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Router } from "@angular/router";

import { CounterListService } from './../../shared/counter/counter-list.service'
import { Counter } from './../../shared/counter/counter'

@Component({
  selector: 'list',
  templateUrl: 'pages/list/list.html',
  styleUrls: ['pages/list/list-common.css']
})

export class ListComponent implements OnInit {
  
  counterName: string = ''
  selected: Counter
  counters: Array<Counter> = []

  constructor(private counterListService: CounterListService,
              private router: Router){}

  ngOnInit(){

    this.selected = this.counterListService.getSelected()
    this.counters = this.counterListService.getAll();

  }

  select(item: Counter){        

    this.counterListService.select(item)
    this.router.navigate([""])

  }

  add() {     

    if (this.counterName.trim() === '') {
      alert('Enter a counter name');
      return;
    }

    this.counterListService.add(this.counterName)
    this.counterName = ''

  }
  
}