import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangeLogRoutingModule } from "./changelog-routing.module";
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { DeviceComponent } from './src/device/device.component';

import { ChangeLogComponent } from './changelog.component';
// import { MatDialog } from '@angular/material';

import  {DragDropModule } from '@angular/cdk/drag-drop';
import { DragulaModule } from 'ng2-dragula';
// import { CKEditorModule } from 'ngx-ckeditor';
import { CKEditorModule } from 'ng2-ckeditor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatButtonModule, MatInputModule, MatDialogModule} from '@angular/material';
import { MatTooltipModule,  } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { } from '@angular/material';

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        ChangeLogRoutingModule,
        MatchHeightModule,
        DragDropModule,
        DragulaModule,
        FormsModule,
        CKEditorModule,
        MatTooltipModule,
        NgbModule,
        MDBBootstrapModule.forRoot(),
        MatDialogModule,
        MatButtonModule,
        MatInputModule,

        // MatDialog,
        // BrowserAnimationsModule,
        // ReactiveFormsModule,
        // BrowserModule
    ],
    exports: [],
    declarations: [
        ChangeLogComponent,
        DeviceComponent,
    ],
    providers: [],
})
export class ChangeLogModule { }
