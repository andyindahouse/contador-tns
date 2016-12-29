import { Component, OnInit } from "@angular/core";
import { CounterListService } from './shared/counter/counter-list.service'


@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent implements OnInit {

    constructor(private counterListService: CounterListService) {}

    ngOnInit(){

        this.counterListService.init();

    }

}