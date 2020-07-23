import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState, rootReducer } from './reducers';
import { newTick } from './tick/actions';
import { TickComponent } from './tick/tick.component';

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

@NgModule({
  declarations: [AppComponent, TickComponent],
  imports: [BrowserModule, AppRoutingModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);

    setInterval(() => {
      this.ngRedux.dispatch(newTick());
    }, 1000);
  }
}
