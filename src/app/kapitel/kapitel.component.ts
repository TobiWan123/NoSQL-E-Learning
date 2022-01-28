import {Component, OnInit} from '@angular/core';
import {InhaltLinkMapping} from '../../InhaltLinkMapping';

@Component({
  selector: 'app-kapitel',
  templateUrl: './kapitel.component.html',
  styleUrls: ['./kapitel.component.scss']
})
export class KapitelComponent implements OnInit {
  links: any = InhaltLinkMapping;
  activeLink: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
