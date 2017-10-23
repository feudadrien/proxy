import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CenterComponent } from './center/center.component';
import { RequestComponent } from './request/request.component';
import { ApproveComponent } from './approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CenterComponent,
    RequestComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'center',
      component: CenterComponent
    },
    {
      path: 'request',
      component: RequestComponent
    },
    {
      path: 'approve',
      component: ApproveComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
