import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TabeComponent } from '../../components/tabe/tabe.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private overlay: Overlay) {}

  open(): void {
    // return style config
    const config = this.createOverlayConfig();
    // Returns an OverlayRef
    const overlayRef = this.overlay.create(config);
    // Create ComponentPortal
    const filePreviewPortal = new ComponentPortal(TabeComponent);
    // close overlay
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    overlayRef.attach(filePreviewPortal);
  }

  createOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });
    return overlayConfig;
  }
}
