import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './components/about/about.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProjectModule } from './components/projects/project.module';
import { ContactModule } from './components/contact/contact.module';
import { LayoutModule } from './pages/layout/layout.module';
import { HomeModule } from './pages/home/home.module';
import { GlobalDialogModule } from './shared/components/global-dialog/global-dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutModule,
    ProjectModule,
    ContactModule,
    LayoutModule,
    HomeModule,
    GlobalDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
