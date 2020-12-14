import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StreamComponent } from './components/stream/stream.component';
import { ArrPipe } from './pipes/arr/arr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabeComponent } from './components/tabe/tabe.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { StartPageComponent } from './components/start-page/start-page.component';
import { OverlayService } from './services/overlay/overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    ArrPipe,
    TabeComponent,
    StartPageComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    OverlayModule,
    MatButtonModule
  ],
  providers: [OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
