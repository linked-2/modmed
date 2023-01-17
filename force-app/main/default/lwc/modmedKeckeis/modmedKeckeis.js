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
let cases = [];
let pagePass = false;
export default class ModmedKeckeis extends LightningElement {

    @api recordId;
    columns = COLS;
    pageRecordId;
    cases;
    //rI = this.theAccountId;
    theAccountId2 = theAccountId;
    //@wire(getCases, {accountId: theAccountId})
    //@wire(getCases, {accountId: recordId})
    
    async getData(){
        await getCases({ accountId: this.recordId })
        .then((result)=>{
            console.log('result ==> ', result);
            if(!pagePass){
                result.forEach((x)=>{
                    console.log('x => ', x);
                    cases.push(x);
                })
                pagePass = true;
                cases.forEach((x)=>{
                    console.log('cases(x)', x);
                });
            }
            console.log('cases.length ==> ' , cases.length);

        })
        .catch((error) => {
            this.error = error;
            console.log('error ==> ', error);
        });            
    }
    renderedCallback(){
        this.pageRecordId = this.recordId;
        this.getData();
    }
}

