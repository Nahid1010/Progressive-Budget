let db;
let budgetVersion;

const request = indexedDB.open('BudgetDB', budgetVersion || 1);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');
  
    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;


    function checkDatabase(){
        
    }