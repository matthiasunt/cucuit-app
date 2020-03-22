import {Component, OnInit} from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {DonationsService} from '../../../services/donations/donations.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  year = new Date().getFullYear();

  constructor(public donationsService: DonationsService,
              ) {
  }

  ngOnInit() {
  }

}
