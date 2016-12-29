import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular'

import { NgModule } from '@angular/core'
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptModule } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from 'nativescript-angular/router'

import { AppComponent } from './app.component'
import { routes, navigatableComponents } from './app.routing'
import { CounterListService } from './shared/counter/counter-list.service'
import { CounterFS as CounterDAO } from './shared/counter/counter-fs'

@NgModule({
    imports : [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [CounterListService, CounterDAO],    
    declarations: [
        LISTVIEW_DIRECTIVES,
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}