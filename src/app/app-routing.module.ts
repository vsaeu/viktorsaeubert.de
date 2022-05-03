import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessComponent } from './success/success.component';
import { MainContentComponent } from './main-content/main-content.component';
// import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
