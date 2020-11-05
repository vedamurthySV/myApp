import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UxProductsService } from '../commoncomponents/Services/ux-products.service';


const routes: Routes = [
    { path: '', component: ManageProductsComponent },
];

@NgModule({
    declarations: [ManageProductsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [ManageProductsComponent],
    providers: [UxProductsService]
})
export class ManageProductsModule { }
