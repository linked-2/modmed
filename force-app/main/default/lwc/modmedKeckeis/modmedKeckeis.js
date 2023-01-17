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
let recordSize = 0;
export default class ModmedKeckeis extends LightningElement {

    @api recordId;
    columns = COLS;
    pageRecordId;
    
    //cases;

    //@wire(getCases, {accountId: theAccountId})
    //@wire(getCases, {accountId: recordId})
    
    async getData(){
        await getCases({ accountId: this.recordId })
        .then((result)=>{
            console.log('result ==> ', result);
            if(!pagePass){
                this.cases = [...result];
                result.forEach((x)=>{
                    console.log('x => ', x);
                    this.cases.push({x});
                })
                pagePass = true;
                this.cases.forEach((x)=>{
                    console.log('cases(x)', x);
                });
            }
            this.recordSize = this.cases.length;
            console.log('this.cases.length ==> ' , this.cases.length);
            //this.cases = [...this.cases];
        })
        .catch((error) => {
            this.error = error;
            console.log('error ==> ', error);
        });   
        this.recordSize = this.cases.length;
        console.log('        // this.recordSize = this.cases.length;', this.cases.length);
        this.cases = [...this.cases];         
        console.log('after clone ==> ', this.cases.length);
    }
    async connectedCallback(){
        this.pageRecordId = this.recordId;
        console.log('before getData');
        await this.getData();
        console.log('after getData');
        //this.cases = [...this.cases];     
        //console.log('in connectedCallback this.cases.length ==> ', this.cases.length);
        // this.cases = [...this.cases];
        console.log('connected callback cases', JSON.stringify(this.cases));
        // JSON.stringify(this.cases).forEach((y)=>{
        //     console.log('y = >' , y);
        // })
        console.log('connected callback non stringify cases', this.cases);
    }
    renderedCallback(){
        //this.cases = [...this.cases];
        // this.recordSize = this.cases.length;
        // //console.log('this.recordSize ==> ', this.cases.length);
        // //this.cases = {...this.cases};
    }
}

