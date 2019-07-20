import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ScannerModalComponent } from "../scanner-modal/scanner-modal.component";

@Component({
  selector: 'ns-tabs-main',
  templateUrl: './tabs-main.component.html',
  styleUrls: ['./tabs-main.component.css'],
  moduleId: module.id,
})
export class TabsMainComponent implements OnInit {

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: { passitTab: 'passit', yrityksetTab: 'yritykset', suosikitTab: 'suosikit' }
        }
      ],
      {
        relativeTo: this.active
      }
    );
  }

  openModal(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: {},
      fullscreen: true
    };
    this.modalService.showModal(ScannerModalComponent, options);
  }

}
