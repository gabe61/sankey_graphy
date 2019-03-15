
import { NgModule } from '@angular/core';
import { MatButtonModule,MatTooltipModule} from '@angular/material'
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {BrowserAnimationsModule} from '@angular/platform browser/animations';
// import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

// import { CKEditorModule } from 'ngx-ckeditor';
import * as $ from 'jquery';

// import { IpEmailBuilderModule } from 'ip-email-builder';
// import { IpEmailBuilderModule } from 'ip-email-builder';


@NgModule({
    exports: [

    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        MatTooltipModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        // DragulaModule,
        NgbModule.forRoot(),
        // IpEmailBuilderModule.forRoot({apikey: '...'}),
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
