import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import firebase = require("nativescript-plugin-firebase");
import { Router } from '@angular/router';
@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void { }
    login_fb() {

        firebase.login({
            type: firebase.LoginType.FACEBOOK
        }).then(
            (result) => {
                console.log(result)
            },
            (errorMessage) => {
                console.log(errorMessage);
            }
        )
    }
    login_google() {
        firebase.login({
            type: firebase.LoginType.GOOGLE,

        }).then(
            function (result) {
                console.log(result)
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
        );
    }
}
