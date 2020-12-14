import { Component, OnInit } from '@angular/core';
import { OverlayService } from './../../services/overlay/overlay.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(
    private overlayService: OverlayService
  ) { }

  ngOnInit(): void {
  }

  clickButton(): void {
    this.overlayService.open();
  }

}
