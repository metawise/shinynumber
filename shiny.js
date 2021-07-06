function shiny(num) {
  let shinyNumbers = []; // if it fills to 100 length loop stops
  var index = 1; // just indexing
  while (shinyNumbers.length < 100) {
    num += 1; // next number of given number
    if (isShiny(num)) {
      // if it's shiny pushing to array
      shinyNumbers.push({ index, num });
      index++; //adding index number
    }
  }
  console.log("first 100 shinyNumbers:", shinyNumbers);
}

function isShiny(number) {
  let arr = number.toString(10).replace(/\D/g, "0").split("").map(Number); //making number to array
  for (var num = 0; num < arr.length - 1; num++) {
    // looping through array
    if (
      arr[num] >= arr[num + 1] || // checking if current number is lower than next number in array
      Number.isNaN(arr[num]) || // if current number is valid or not
      Number.isNaN(arr[num + 1]) // if there is next number exist
    ) {
      return false;
    }
  }
  return true;
}

shiny(200);
