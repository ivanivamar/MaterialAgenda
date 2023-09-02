import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {initializeApp} from "firebase/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {provideFirebaseApp} from "@angular/fire/app";
import {getStorage, provideStorage} from "@angular/fire/storage";
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        BrowserModule,
        PdfViewerModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
