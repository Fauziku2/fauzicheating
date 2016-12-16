$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'products.csv',
    dataType: 'text',
    success: function (data) {
      processData(data)
    }
  })
})

function processData (csvData) {
  // split the rows into an array
  var rowInString = csvData.split(/\r\n|\n/)

  var rowInArray = []
  for (var i = 0; i < rowInString.length; i++) {
    var rowData = rowInString[i].split(',')
    console.log(rowData)
    var volume = (rowData[2] * rowData[3] * rowData[4])
    var value = volume / rowData[1]
    console.log(value)
  }
  // console.log(rowInArray)
}
