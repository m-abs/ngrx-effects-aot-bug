import { NgModule } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { counterReducer, CounterEffects } from './store';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      counter: (counterReducer),
    }),
    EffectsModule.run(CounterEffects),
  ],
  providers: [],
})
export class AppModule {}
