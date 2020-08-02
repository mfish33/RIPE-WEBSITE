import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { HomeModule } from './modules/home/home.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { AuthModule } from './modules/auth/auth.module';
import { FirebaseModule } from './firebase.module';
import { CourseTemplateModule } from './modules/course-template/course-template.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LessonModule,
    AuthModule,
    FirebaseModule,
    CourseTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
