import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

import { StampService } from "../../../shared/services/stamp.service";

@Component({
  selector: 'ns-stamp-cards',
  templateUrl: './stamp-cards.component.html',
  styleUrls: ['./stamp-cards.component.css'],
  moduleId: module.id,
})
export class StampCardsComponent implements OnInit {
  isLoading = false;

  constructor(private page: Page, private stampService: StampService) { }

  ngOnInit() {
    this.isLoading = true;
    this.page.actionBarHidden = true;
    this.stampService.getUserStampCardsInfo();
  }

}
