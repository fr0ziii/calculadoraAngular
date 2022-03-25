import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReadmeComponent } from './readme/readme.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'readme', component: ReadmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
