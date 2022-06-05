// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  //clear out table data
  tbody.html("");
  //Loop through each object in the data
  //append a row and cells for each value in the row
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    //loop through each field in the dataRow
    //add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  // grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  //check to see if a date was entered
  //filter the data using that date
  if (date) {
    //apply filter to the table data
    // only keep rows where 'datetime' matches
    //the filter value
    filteredData = filteredData.filter((row) => row.datetime === date);
  }
  //rebuild the table using the filtered data
  //if no date filter was entered
  buildTable(filteredData);
}

// listen for the click button event
d3.selectAll("#filter-btn").on("click", handleClick);

// build the talbe when the page loads
buildTable(tableData);
