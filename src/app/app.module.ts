import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './components/Blogs/blog-details/blog-details.component';
import { BlogComponent } from './components/Blogs/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CarouselModule,
    BrowserModule.withServerTransition({ appId: 'bawabtelsharq' }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: translateFactory,
    //     deps: [HttpClient]
    //   }
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function translateFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient, "../assets/i18n", ".json");
// }