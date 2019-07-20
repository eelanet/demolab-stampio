import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { CompanyService } from "../../../shared/services/company.service";
import { StampService } from '../../../shared/services/stamp.service';
import { Company } from "../../../shared/classes/company";


@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  isLoading = false;
  searchPhrase: string;
  companies: Array<Company> = [];

  constructor(private page: Page, private stampService: StampService, private companyService: CompanyService) { }

  ngOnInit() {
    this.isLoading = true;
    this.page.actionBarHidden = true;
    this.getCompanies();
  }

  onSearchBarLoad() {
    const searchbar: SearchBar = <SearchBar>this.page.getViewById("searchbarid");
    searchbar.android.clearFocus();
  }

  onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    alert("Etsit sanaa " + searchBar.text);
  }

  onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    // console.log("SearchBar text changed! New value: " + searchBar.text);
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(
      (data: any) => {
        this.companies = data;
        this.isLoading = false;
      });
  }

}
