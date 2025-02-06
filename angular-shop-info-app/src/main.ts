import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ShopInfoComponent } from './components/shop-info/shop-info.component';
import 'zone.js';  

bootstrapApplication(ShopInfoComponent).then((appRef) => {
  const injector = appRef.injector;
  const shopInfoElement = createCustomElement(ShopInfoComponent, { injector });
  customElements.define('shop-info', shopInfoElement);
});
