import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickComponent } from './tick/tick.component';

import { newTick } from './tick/actions';

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

interface IAppState {
  /* ... */
}

export const store: Store<IAppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createLogger())),
);

@NgModule({
  declarations: [
    AppComponent,
    TickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);

    setInterval(() => {
      this.ngRedux.dispatch(newTick());
    }, 1000); 
  }
}
