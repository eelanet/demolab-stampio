import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TabsMainRoutingModule } from "./main-routing.module";

import { TabsMainComponent } from './components/tabs-main/tabs-main.component';
import { HomeComponent } from './components/home/home.component';
import { StampCardsComponent } from './components/stamp-cards/stamp-cards.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { StampCardComponent } from './components/stamp-card/stamp-card.component';
import { StampComponent } from './components/stamp/stamp.component';
import { CompanyComponent } from './components/company/company.component';

import { StampService } from "../shared/services/stamp.service";
import { CompanyService } from "../shared/services/company.service";
import { SettingsComponent } from './components/settings/settings.component';

// Barcode scanner
import { registerElement } from "nativescript-angular/element-registry";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { ScannerModalComponent } from './components/scanner-modal/scanner-modal.component';
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);


@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsMainRoutingModule,
        HttpClientModule
    ],
    declarations: [
        TabsMainComponent,
        HomeComponent,
        StampCardsComponent,
        FavoritesComponent,
        CompaniesComponent,
        StampCardComponent,
        StampComponent,
        CompanyComponent,
        SettingsComponent,
        ScannerModalComponent
    ],
    providers: [StampService, CompanyService, BarcodeScanner],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ScannerModalComponent]
})

export class MainModule { }
