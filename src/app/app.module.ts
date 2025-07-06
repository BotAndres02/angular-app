import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutLabsComponent } from '../components/about-labs/about-labs.component';
import { ExampleFormComponent } from '../components/example-form/example-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from '../components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CharacterListComponent,
    NavbarComponent,
    HeroComponent,
    AboutLabsComponent,
    CourseComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
