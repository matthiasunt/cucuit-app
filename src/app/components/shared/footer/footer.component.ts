import {Component, OnInit} from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {DonationsService} from '../../../services/donations/donations.service';
import {getLangs} from '../../../util/languages.util';
import {Language} from '../../../models/language';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  year = new Date().getFullYear();

  languages: Language[];

  constructor(
    public donationsService: DonationsService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit() {
    this.languages = getLangs().slice(0, 3);
  }

  changeLanguage(lang: Language) {
    this.translate.use(lang.short);
    localStorage.setItem('language', lang.short);
  }


}
