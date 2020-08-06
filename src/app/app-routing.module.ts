import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CourseTemplateComponent } from './modules/course-template/components/course-template/course-template.component';
import { LessonComponent } from './modules/lesson/components/lesson/lesson.component';
import { CourseOverviewComponent } from './modules/course-overview/components/course-overview/course-overview.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseOverviewComponent },
  { path: 'lessons/:cid/:lid', component: LessonComponent },
  { path: 'courses/:cid', component: CourseTemplateComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }