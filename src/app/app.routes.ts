import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { NgForEx } from './components/ng-for-ex/ng-for-ex';
import { NgIfEx } from './components/ng-if-ex/ng-if-ex';
import { NgclassEx } from './components/ngclass-ex/ngclass-ex';
import { BasicSignal } from './components/basic-signal/basic-signal';
import { GetAPIEx } from './components/get-apiex/get-apiex';
import { VendorMaster } from './components/vendor-master/vendor-master';
import { EmployeeApp } from './components/employee-app/employee-app';
import { ReactiveEmployeeForm } from './components/reactive-employee-form/reactive-employee-form';

export const routes: Routes = [
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'ng-for-example',
        component: NgForEx
    },
    {
        path: 'ng-if-ex',
        component: NgIfEx
    },
    {
        path:'ng-class',
        component: NgclassEx
    },
    {
        path:'vendor',
        component: VendorMaster
    },
    {
        path:'employeeapp',
        component: EmployeeApp
    },
    {
        path:'signal-basic',
        component: BasicSignal
    },
    {
        path:'get-api',
        component: GetAPIEx
    },
    {
        path:'reactive-form',
        component: ReactiveEmployeeForm
    }
];
