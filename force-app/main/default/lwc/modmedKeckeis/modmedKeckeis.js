import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin }from 'lightning/navigation';
import { getRecords } from 'lightning/uiRecordApi';
import getCases from '@salesforce/apex/lwcGetCaseRelatedToAccount.lwcGetCases';

import CASE_OBJECT                              from '@salesforce/schema/Case';
import DATE_TIME_OPENED                         from '@salesforce/schema/Case.CreatedDate'
import SUBJECT                                  from '@salesforce/schema/Case.Subject';	
import CASE_NUMBER                              from '@salesforce/schema/Case.CaseNumber';	
import LAST_MODIFIED                            from '@salesforce/schema/Case.LastModifiedById';	
import STATUS                                   from '@salesforce/schema/Case.Status';	
import REASON                                   from '@salesforce/schema/Case.Reason';
const COLS = [
    { label: 'Date/Time Opened', fieldName: 'DATE_TIME_OPENED.fieldApiName',sortable: true},
    { label: 'Subject', fieldName: 'SUBJECT.fieldApiName',sortable: true},
    { label: 'Case Number', fieldName: 'CASE_NUMBER.fieldApiName',sortable: true},
    { label: 'Date Last Modified', fieldName: 'LAST_MODIFIED.fieldApiName',sortable: true},
    { label: 'Status', fieldName: 'STATUS.fieldApiName',sortable: true},
    { label: 'Reason', fieldName: 'REASON.fieldApiName',sortable: true}
];
let theAccountId = '001Dn00000C8cltIAB';
let dummy = true;
function tryThis(){
    console.log('I\'m Here!');
}
export default class ModmedKeckeis extends LightningElement {
    @api recordId;

    columns = COLS;
    @wire(getCases, {accountId: theAccountId})
    cases;

    if(data){
        console.log('this is the data ', JSON.stringify(cases.data));
    }
}

