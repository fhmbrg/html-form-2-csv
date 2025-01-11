function demoC () {
  // (PART A) READ CSV FILE
  Papa.parse(document.getElementById("picker").files[0], {
    skipEmptyLines: true,

    // (PART B) DRAW CSV FILE
    complete : csv => {
      // (B1) GET + RESET HTML TABLE
      var table = document.getElementById("demoC");
      table.innerHTML = "";

      // (B2) DRAW TABLE HEADER
      var thead = table.createTHead(),
          tr = thead.insertRow();
      for (let cell of csv.data[0]) {
        let td = tr.insertCell();
        td.innerHTML = cell;
      }

      // (B3) DRAW TABLE BODY
      var tbody = table.createTBody();
      for (let i=1; i<csv.data.length; i++) {
        let row = csv.data[i],
            tr = tbody.insertRow();
        for (let cell of row) {
          let td = tr.insertCell();
          td.innerHTML = cell;
        }
      }
    }
  });
}