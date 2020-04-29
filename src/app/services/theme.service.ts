import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
   }

   enableDark() {
     this.renderer.addClass(this.document.body, 'dark-theme');
   }

   enableLight() {
     this.renderer.removeClass(this.document.body, 'dark-theme');
   }

   clearThemes() {
     this.renderer.removeClass(this.document.body, 'gamecock-theme');
     this.renderer.removeClass(this.document.body, 'christmas-theme');
     this.renderer.removeClass(this.document.body, 'halloween-theme');
     this.renderer.removeClass(this.document.body, 'summer-theme');
     this.renderer.removeClass(this.document.body, 'fall-theme');
     this.renderer.removeClass(this.document.body, 'winter-theme');
     this.renderer.removeClass(this.document.body, 'spring-theme');
   }

   enableDefault() {
     this.clearThemes();
   }

   enableChristmas() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'christmas-theme');
   }

   enableGamecock() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'gamecock-theme');
   }

   enableHalloween() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'halloween-theme');
   }

   enableSummer() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'summer-theme');
   }

   enableFall() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'fall-theme');
   }

   enableWinter() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'winter-theme');
   }

   enableSpring() {
     this.clearThemes();
     this.renderer.addClass(this.document.body, 'spring-theme');
   }
   
}
