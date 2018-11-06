import { Component, OnInit } from "@angular/core";
import firebase = require('nativescript-plugin-firebase');
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    user
    ngOnInit(): void {
        firebase.getCurrentUser()
            .then(user => {
                console.log(user)
                this.user = user
            })
            .catch(error => console.error(error))

    }
    goToLogin() {
        this.router.navigateByUrl("/login")
    }
    logout() {
        firebase.logout()
    }
}
