import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    AdminModule,
    UserModule,
    NavbarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
