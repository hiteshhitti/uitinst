import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { BlogadminComponent } from './pages/blogadmin/blogadmin.component';
import { BannerComponent } from './pages/banner/banner.component';
import { DatascienceComponent } from './pages/datascience/datascience.component';
import { animate, animation } from '@angular/animations';
import { WebdesigningComponent } from './pages/webdesigning/webdesigning.component';
import { FullstackComponent } from './pages/fullstack/fullstack.component';
import { PythonComponent } from './pages/python/python.component';
import { JavadsaComponent } from './pages/javadsa/javadsa.component';
import { AngularComponent } from './pages/angular/angular.component';
import { ReactComponent } from './pages/react/react.component';
import { NodejsComponent } from './pages/nodejs/nodejs.component';
import { MssqlComponent } from './pages/mssql/mssql.component';
import { MongodbComponent } from './pages/mongodb/mongodb.component';
import { ComputerbasicsComponent } from './pages/computerbasics/computerbasics.component';
import { TallyComponent } from './pages/tally/tally.component';
import { ComputerhardwareComponent } from './pages/computerhardware/computerhardware.component';
import { McsaComponent } from './pages/mcsa/mcsa.component';
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { CcnaComponent } from './pages/ccna/ccna.component';
import { CehComponent } from './pages/ceh/ceh.component';
import { CprogrammingComponent } from './pages/cprogramming/cprogramming.component';
import { RedhatComponent } from './pages/redhat/redhat.component';

export const routes: Routes = [
    {path: '', component:BannerComponent, data: {animation: 'BannerPage'} },
    {path: 'about', component:AboutComponent},
    {path: 'courses', component:CoursesComponent},
    {path: 'gallery', component:GalleryComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'blog', component:BlogpageComponent},
    {path: 'blogadmin', component:BlogadminComponent},
    {path: 'datascience', component:DatascienceComponent, data: {animation: 'DataSciencePage'} },
    {path: 'webdesigning', component:WebdesigningComponent, data: {animation: 'WebDesigningPage'} },
    {path: 'fullstack', component:FullstackComponent, data: {animation: 'FullStackPage'} },
    {path: 'python', component:PythonComponent, data: {animation: 'PythonPage'} },
    {path: 'cprogram', component:CprogrammingComponent, data : {animation: 'CProgrammingPage'} },
    {path: 'java', component:JavadsaComponent, data: {animation: 'JavaPage'} },
    {path: 'angular', component:AngularComponent, data: {animation: 'AngularPage'} },
    {path: 'react', component:ReactComponent, data: {animation: 'ReactPage'} },
    {path: 'node', component:NodejsComponent, data: {animation: 'NodePage'} },
    {path: 'mssql', component:MssqlComponent, data: {animation: 'MssqlPage'} },
    {path: 'mongo', component:MongodbComponent, data: {animation: 'MongoPage'} },
    {path: 'basics', component:ComputerbasicsComponent, data: {animation: 'BasicsPage'} },
    {path: 'tally', component:TallyComponent, data: {animation: 'TallyPage'} },
    {path: 'hardware', component:ComputerhardwareComponent, data: {animation: 'HardwarePage'} },
    {path: 'mcsa', component:McsaComponent, data: {animation: 'McsaPage'} },
    {path: 'ccna', component:CcnaComponent, data: {animation: 'CcnaPage'} },
    {path: 'ceh', component:CehComponent, data: {animation: 'CehPage'} },
    {path: 'redhat', component:RedhatComponent, data : {animation: 'RedhatPage'} },
];
