import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { mainRouting } from "./dashboard.routing";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    mainRouting
  ],
  declarations: [
    DashboardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
