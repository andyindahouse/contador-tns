import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core'
import { Router } from "@angular/router"

import { ListViewEventData, RadListView }  from "nativescript-telerik-ui/listview"
import * as frameModule from "tns-core-modules/ui/frame"
import { TextField } from "tns-core-modules/ui/text-field"
import { ObservableArray } from "tns-core-modules/data/observable-array"


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
  counters: ObservableArray <Counter>
  @ViewChild("counterTextField") counterTextField : ElementRef
  

  constructor(private counterListService: CounterListService,
              private router: Router, 
              private zone: NgZone){}

  ngOnInit(){

    this.counters = new ObservableArray(this.counterListService.getAll())

  }

  select(item: Counter){        

    this.counterListService.select(item)
    this.router.navigate([""])

  }

  add() {     

    if (this.counterName.trim() === '') {
      alert('Enter a counter name')
      return
    }
    
    // Dismiss the keyboard
    let textField = <TextField>this.counterTextField.nativeElement
    textField.dismissSoftInput()

    this.counters.unshift(    
      this.counterListService.add(this.counterName)
    )
    this.counterName = ''   

  }

  del(index: number){    

    if(this.counters.length === 1){
      alert('You can´t delete your last counter')
      return;
    }
    
    this.counterListService.del(index)
    this.zone.run(() => {
      this.counters.splice(index, 1)
    })

  }

  // > Manage swipe events

  onSwipeCellStarted(args: ListViewEventData) {
    
    var swipeLimits = args.data.swipeLimits;
    var listView = frameModule.topmost().currentPage.getViewById("listView");

    //swipeLimits.threshold = listView.getMeasuredWidth();
    swipeLimits.left = 0;
    //swipeLimits.right = listView.getMeasuredWidth();

  }

  onSwipeCellFinished(args: ListViewEventData) {
    
    if (args.data.x < -400) {        
       this.del(args.itemIndex)      
    }

  }

  onItemClick(args: ListViewEventData) {

    this.select(this.counters.getItem(args.itemIndex))

  }
  
}