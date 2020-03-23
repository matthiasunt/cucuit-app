import {Component, OnInit} from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {DonationsService} from '../../../services/donations/donations.service';
import {getLangs} from '../../../util/languages.util';
import {Language} from '../../../models/language';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  year = new Date().getFullYear();

  languages: Language[];

  constructor(public donationsService: DonationsService,
  ) {
  }

  ngOnInit() {
    this.languages = getLangs().slice(0, 3);
  }

  changeLanguage(lang: Language) {
    console.log(lang);
  }


}
