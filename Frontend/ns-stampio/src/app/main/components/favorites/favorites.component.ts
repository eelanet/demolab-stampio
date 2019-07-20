import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  moduleId: module.id,
})
export class FavoritesComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
