import { NgModule } from '@angular/core'
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from 'nativescript-angular/router'

import { AppComponent } from './app.component'
import { routes, navigatableComponents } from './app.routing'
import { CounterListService } from './shared/counter/counter-list.service'

@NgModule({
    imports : [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [CounterListService],    
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}