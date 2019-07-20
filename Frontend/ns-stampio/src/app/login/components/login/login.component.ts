import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  constructor(private page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onLogin() {
    this.router.navigate(['/main'], { clearHistory: true });
  }
}
