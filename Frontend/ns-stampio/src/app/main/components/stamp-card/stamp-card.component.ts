import { Component, OnInit } from '@angular/core';

import { Stamp } from "../../../shared/classes/stamp";
import { StampCard } from "../../../shared/classes/stamp-card";

import { StampService } from "../../../shared/services/stamp.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-stamp-card',
  templateUrl: './stamp-card.component.html',
  styleUrls: ['./stamp-card.component.css'],
  moduleId: module.id,
})
export class StampCardComponent implements OnInit {


  constructor(private stampService: StampService, private route: ActivatedRoute) { }

  ngOnInit() {

  }


}
