import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CompletenessPipe } from './completeness.pipe';
import { FundProjectComponent } from './fund-project/fund-project.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    DetailViewComponent,
    NewProjectComponent,
    AdminComponent,
    EditProjectComponent,
    CompletenessPipe,
    FundProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
