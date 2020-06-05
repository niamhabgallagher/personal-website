import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private inAppBrowser: InAppBrowser
  ) {}

  ngOnInit() {
  }

  openLinkedIn() {
    const url = 'https://www.linkedin.com/in/niamhabgallagher/';
    const linkedin = this.inAppBrowser.create(url, '_system');

    linkedin.show();
  }
  // mailto:someone@example.com?Subject=Hello%20again

  openGithub() {
    const url = 'https://github.com/niamhabgallagher';
    const github = this.inAppBrowser.create(url, '_system');

    github.show();
  }

  sendEmail() {
    const url = 'mailto:niamhgallagher1@yahoo.co.uk?Subject=From%20Niamh%20Gallagher\'s%20Website';
    const email = this.inAppBrowser.create(url, '_system');

    email.show();
    console.log('email');
  }
}
