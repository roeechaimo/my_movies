import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatIconRegistry
} from '@angular/material';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-icon-component',
  templateUrl: './icon-component.component.html',
  styleUrls: ['./icon-component.component.scss']
})
export class IconComponentComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon("thumbs-up", sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {}

}
