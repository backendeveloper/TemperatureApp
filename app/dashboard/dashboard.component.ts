import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { action } from "ui/dialogs";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";

import { LoginService, alert } from "../shared";

@Component({
  selector: "dashboard",
  moduleId: module.id,
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.css"],
})
export class DashboardComponent implements OnInit {
  grocery: string = "";
  isAndroid;
  isShowingRecent = false;
  isLoading = false;

  constructor(private router: Router,
    private loginService: LoginService,
    private page: Page) {}

  ngOnInit() {
    this.isAndroid = !!this.page.android;
    this.page.actionBarHidden = true;
    this.page.className = "list-page";
  }

  // Prevent the first textfield from receiving focus on Android
  // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
  // handleAndroidFocus(textField, container) {
  //   if (container.android) {
  //     container.android.setFocusableInTouchMode(true);
  //     container.android.setFocusable(true);
  //     textField.android.clearFocus();
  //   }
  // }

  logoff() {
    this.loginService.logoff();
    this.router.navigate(["/login"]);
  }

  submit(){
       this.router.navigate(["/groceries"]);

  }
}
