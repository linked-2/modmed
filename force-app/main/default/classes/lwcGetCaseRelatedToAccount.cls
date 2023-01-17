public with sharing class lwcGetCaseRelatedToAccount {
    @AuraEnabled(cacheable=true)
    public static List<Case> lwcGetCases(Id accountId) {
        List<Case> theCases = new List<Case>();
       theCases = [SELECT Id, CreatedDate, Subject, CaseNumber, LastModifiedById, Status, Reason FROM Case WHERE AccountId = :accountId];
       for(Case c :theCases){
        system.debug('the case is ==> ' + c);
       }
       return theCases;
    }
}