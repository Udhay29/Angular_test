import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentproComponent } from '../contentpro/contentpro.component';
import { CustomDirective } from '../custom.directive';
import { CustompipePipe } from '../custompipe.pipe';
import { SiblingComponent } from '../sibling/sibling.component';
import { TestService } from '../test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: TestComponent
}];

@NgModule({
  declarations: [TestComponent, ContentproComponent, CustomDirective, CustompipePipe, SiblingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [TestService]
})
export class TestModule { }
