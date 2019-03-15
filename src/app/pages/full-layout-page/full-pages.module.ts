import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';
import { FullLayoutPageService } from './full-layout-page.service';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        HttpClientModule
    ],
    declarations: [
        FullLayoutPageComponent
    ],
    providers: [
        FullLayoutPageService,
    ]
})
export class FullPagesModule { }
