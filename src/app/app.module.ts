import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { ChuckNorrisService } from './chuck-norris/chuck-norris.service';

@NgModule({
  declarations: [
    ChuckNorrisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [
	  ChuckNorrisComponent
  ],
  providers: [ ChuckNorrisService ],
  bootstrap: [ChuckNorrisComponent]
})
export class AppModule {

	constructor(private injector: Injector) {

	}

	ngDoBootstrap() {
		const el = createCustomElement(ChuckNorrisComponent, {
			injector: this.injector
		});
		customElements.define('chuck-norris', el);
	}
 }
