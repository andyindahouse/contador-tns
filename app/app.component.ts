import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    
    counter: number = 9999;   
    
    onTap() {
        this.counter++;
    }

    reboot() {
        this.counter=0;
    }

    showCounters(){
        alert('under construction')
    }

}
