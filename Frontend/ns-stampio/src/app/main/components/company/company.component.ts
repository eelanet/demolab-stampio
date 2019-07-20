import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

import { StampService } from "../../../shared/services/stamp.service";

@Component({
  selector: 'ns-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  moduleId: module.id,
})
export class CompanyComponent implements OnInit {
  isLoadingPage = false;
  isFull: boolean = false;

  id;
  stampCard: any;
  name: string = '';
  expireDate: string = '';
  prizeText: string = '';
  stamps: any;
  maxStamps: any;
  marks = [];
  amount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private stampService: StampService,
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
    this.isLoadingPage = true;
    this.getStampCard();
  }

  onUsePrize() {
    console.log('usePrize()');
    alert('Palkinto käytetty');
    this.stampService.clearStamps(this.id).subscribe(() => {
      this.isFull = false;
      this.marks.forEach((mark) => {
        mark.check = false;
      });
      console.log('nollattu.');
    });
  }

  getStampCard() {
    this.id = this.route.snapshot.params.id;
    console.log('Leimapassin id: ' + this.id);
    this.stampService.getUserStampCard(this.id).subscribe(
      (data: any) => {
        this.stampCard = data;
        this.name = this.stampCard.korttipohja.nimi;
        this.prizeText = this.stampCard.korttipohja.selite;
        this.expireDate = this.stampCard.korttipohja.voimassaoloaika;
        this.stamps = this.stampCard.leimalaskuri;
        this.maxStamps = this.stampCard.korttipohja.leimamaara;
        this.checkMark();
      });
  }

  goBack() {
    console.log('goBack()');
    // this.routerExtensions.backToPreviousPage();
    this.routerExtensions.navigate(['/main/tabsmain']);
  }

  checkMark() {
    if (this.marks.length === 0) {
      for (let index = 0; index < this.maxStamps; index++) {
        if (index < this.maxStamps - 1) {
          this.marks.push({
            check: false,
            prize: false
          });
        }
        if (index === this.maxStamps - 1) {
          this.marks.push({
            check: false,
            prize: true
          });
        }
      }
      if (this.stamps === 0) {
        this.marks.forEach((mark) => {
          mark.check = false;
        });
      } else {
        for (let index = 0; index < this.stamps; index++) {
          this.marks[index].check = true;
        }
      }
    } else {
      if (this.stamps === 0) {
        this.marks.forEach((mark) => {
          mark.check = false;
        });
      } else {
        for (let index = 0; index < this.stamps; index++) {
          this.marks[index].check = true;
        }
      }
    }
    this.amount = 0;
    this.marks.forEach((mark) => {
      if (mark.check) {
        this.amount++;
      }
    });
    console.log('Leimojen määrä on: ' + this.stamps);
    if (this.stamps >= this.marks.length - 1) {
      this.isFull = true;
      console.log('Leimakortti on täynnä: ' + this.isFull);
    } else if (this.stamps >= 0 && this.stamps < this.marks.length - 1) {
      this.isFull = false;
      console.log('Leimakortti ei ole täynnä');
    }
    this.isLoadingPage = false;
  }

}
