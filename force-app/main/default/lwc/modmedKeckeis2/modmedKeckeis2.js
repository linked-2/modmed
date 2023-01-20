import { LightningElement, wire, api, track } from 'lwc';
import getCases from '@salesforce/apex/lwcGetCaseRelatedToAccount.lwcGetCases';

const COLS = [
    { label: 'Date/Time Opened', fieldName: 'CreatedDate',sortable: true},
    { label: 'Subject', fieldName: 'Subject',sortable: true},
    { label: 'Case Number', fieldName: 'CaseNumber',sortable: true},
    { label: 'Status', fieldName: 'Status',sortable: true},
    { label: 'Reason', fieldName: 'Reason',sortable: true}
];

export default class ModmedKeckeis extends LightningElement {
    @api recordId;
    @track cases;
    columns = COLS;
    numOfCases;


    @wire(getCases, {accountId: '$recordId'})
    wiredCases({data, error}) {
        if(data){
            this.cases = [...data];
            this.numOfCases = this.cases.length;
        }else if(error){
            console.log('error ==> ', error);
        }
    }
          
}


