import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { AuthGuard } from "../auth-guard.service";

const mainRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
];
export const mainRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);