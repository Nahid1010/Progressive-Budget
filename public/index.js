let transactions = [];

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal();
    populateTable();
    populateChart();
  });
  function populateTotal() {
    // reduce transaction amounts to a single total value
    let total = transactions.reduce((total, t) => {
      return total + parseInt(t.value);
    }, 0);
  
    let totalEl = document.querySelector("#total");
    totalEl.textContent = total;
  }
  function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
  
    transactions.forEach(transaction => {
      // create and populate a table row
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
      `;
  
      tbody.appendChild(tr);
    });
    function populateChart() {
      // copy array and reverse it
      let reversed = transactions.slice().reverse();
      let sum = 0;
    
      // create date labels for chart
      let labels = reversed.map(t => {
        let date = new Date(t.date);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      });
    
      // create incremental values for chart
      let data = reversed.map(t => {
        sum += parseInt(t.value);
        return sum;
      });
    
  
  
  