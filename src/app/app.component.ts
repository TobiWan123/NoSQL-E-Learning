import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seminar2ELearningNoSQL';
  chapter = 'Kapitel 1';
  public toggleLeftDrawer(drawer: ElementRef): void {
    drawer.nativeElement.style.width = '0';
  }
}
