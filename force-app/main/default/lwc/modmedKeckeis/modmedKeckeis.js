import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin }from 'lightning/navigation';
import { getRecords } from 'lightning/uiRecordApi';
import getCases from '@salesforce/apex/lwcGetCaseRelatedToAccount.lwcGetCases';

const COLS = [
    { label: 'Date/Time Opened', fieldName: 'CreatedDate',sortable: true},
    { label: 'Subject', fieldName: 'Subject',sortable: true},
    { label: 'Case Number', fieldName: 'CaseNumber',sortable: true},
    { label: 'Status', fieldName: 'Status',sortable: true},
    { label: 'Reason', fieldName: 'Reason',sortable: true}
];
let theAccountId = '001Dn00000C8cltIAB';
let theAccountID2 = '';
let rI = '';
export default class ModmedKeckeis extends LightningElement {
    
    @api recordId;
    columns = COLS;
    rI = this.theAccountId;
    theAccountId2 = theAccountId;
    @wire(getCases, {accountId: theAccountId})
    // @wire(getCases, {accountId: recordId})
    cases;
}

