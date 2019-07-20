import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent implements OnInit {

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

}
