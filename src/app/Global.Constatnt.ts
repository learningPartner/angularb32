import { FromData, Menu } from "./app";

export const MenuItems: Menu[] = [
    { 
        route: 'databinding',
        roles: ['Guest', 'Admin']
    },
    {
        route:'ng-for-example',
        roles: ['Admin']
    }
];

export const EmployeeFormData: FromData[] = [
    {
        formControlName: 'name',
        label:'Name',
        placeHolderText: 'Enter Name',
        inputType: 'text',
        className:'col-12'
    },
    {
        formControlName: 'city',
        label:'City',
        placeHolderText: 'Enter City',
        inputType: 'checkbox',
        className:'col-6'
    },
    {
        formControlName: 'state',
        label:'State',
        placeHolderText: 'Enter State',
        inputType: 'text',
        className:'col-6'
    }
]