import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/components/login/login.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', loadChildren: '~/app/main/main.module#MainModule' },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
