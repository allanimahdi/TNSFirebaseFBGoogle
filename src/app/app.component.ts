import { Component, OnInit, NgZone } from "@angular/core";
import firebase = require('nativescript-plugin-firebase');
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        firebase.init({
            onAuthStateChanged: this.onAuthStateChanged.bind(this)
        })
            .then(instance => {
                console.log("firebase.init done");
            })
            .catch(error => {
                console.log(`firebase.init error: ${error}`);
            })
    }
    constructor(private router: Router, private zone: NgZone) {
    }
    onAuthStateChanged(data) {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));

            this.router.navigateByUrl("/home")
        } else {
            this.zone.run(() => {
                this.router.navigateByUrl("/login")
            })
        }
    }

}
