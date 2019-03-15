import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentLayoutPageService } from './content-layout-page.service';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { ContentLayoutPageComponent } from './content-layout-page.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        ContentLayoutPageComponent
    ],
    providers: [
        ContentLayoutPageService
    ]
})
export class ContentPagesModule { }
