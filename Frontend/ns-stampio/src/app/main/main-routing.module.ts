import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TabsMainComponent } from "./components/tabs-main/tabs-main.component";
import { HomeComponent } from "./components/home/home.component";
import { StampCardsComponent } from "./components/stamp-cards/stamp-cards.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { CompanyComponent } from "./components/company/company.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
    { path: '', redirectTo: '/main/tabsmain', pathMatch: 'full' },
    {
        path: 'tabsmain',
        component: TabsMainComponent,
        children: [
            { path: 'passit', component: StampCardsComponent, outlet: 'passitTab' },
            { path: 'yritykset', component: HomeComponent, outlet: 'yrityksetTab' },
            { path: 'suosikit', component: FavoritesComponent, outlet: 'suosikitTab' }
        ]
    },
    { path: 'company/:id', component: CompanyComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'settings', component: SettingsComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsMainRoutingModule { }
