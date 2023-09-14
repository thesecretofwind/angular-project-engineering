import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMockModule,
         NgMockConfig, 
         MOCK_CONFIG_CONFIG
       } from '@vm0100/ngmock';

import * as MOCK_DATA from '../../../_mock'

const alainConfig: NgMockConfig = {
  mock: {
    data: MOCK_DATA,
    log: false
  }
}

@NgModule({
  declarations: [],
  providers:[{
    provide: MOCK_CONFIG_CONFIG,
    useValue: alainConfig
  }],
  imports: [NgMockModule.forRoot()]
})
export class MockModule { }
