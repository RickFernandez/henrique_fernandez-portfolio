import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './components/about/about.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { SideNavComponent } from './components/core/side-nav/side-nav.component';
import { ProjectModule } from './components/projects/project.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
