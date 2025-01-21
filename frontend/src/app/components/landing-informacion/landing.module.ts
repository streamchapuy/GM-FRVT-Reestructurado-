import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingInfo1Component } from './landing-info-1/landing-info-1.component';
import { LandingInfo2Component } from './landing-info-2/landing-info-2.component';
import { LandingInfo3Component } from './landing-info-3/landing-info-3.component';
import { LandingInfo4Component } from './landing-info-4/landing-info-4.component';

@NgModule({
    declarations: [
        LandingInfo1Component,
        LandingInfo2Component,
        LandingInfo3Component,
        LandingInfo4Component
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LandingInfo1Component,
        LandingInfo2Component,
        LandingInfo3Component,
        LandingInfo4Component
    ]
})
export class LandingModule { }