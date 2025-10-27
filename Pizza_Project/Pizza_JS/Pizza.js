/**
 * Main function that processes the pizza order receipt
 * Handles size selection and pricing, then calls getTopping function
 */
function getReceipt() {
  // This initializes our string so it can get passed from
  // function to function, growing line by line into a full receipt
  var text1 = "<h3>You Ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  
  // Get all radio buttons with "size" class to find selected pizza size
  var sizeArray = document.getElementsByClassName("size");
  
  // Loop through size options to find which one is checked
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      // Add selected size to receipt text
      text1 = text1 + selectedSize + "<br>";
    }
  }
  
  // Set price based on selected pizza size
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  
  // Set running total to base pizza price
  runningTotal = sizeTotal;
  
  // Console output for debugging purposes
  console.log(selectedSize + " = $" + sizeTotal + ".00");
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");
  
  // Call getTopping function and pass current total and receipt text
  getTopping(runningTotal, text1); // All three of these variables will be passed on to each function
}

/**
 * Function that handles topping selection and pricing
 * Calculates additional costs for toppings (first topping free, $1 each additional)
 * Updates the final receipt display
 */
function getTopping(runningTotal, text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  
  // Get all checkboxes with "toppings" class
  var toppingArray = document.getElementsByClassName("toppings");
  
  // Loop through all topping checkboxes to find selected ones
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      // Add selected topping to array and receipt text
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: (" + toppingArray[j].value + ")");
      text1 = text1 + toppingArray[j].value + "<br>";
    }
  }
  
  // Calculate topping costs (first topping is free)
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    // Subtract 1 because first topping is complimentary
    toppingTotal = toppingCount - 1;
  } else {
    // No additional charge for 0 or 1 topping
    toppingTotal = 0;
  }
  
  // Add topping cost to running total
  runningTotal = runningTotal + toppingTotal;
  
  // Console output for debugging
  console.log("total selected topping items: " + toppingCount);
  console.log(
    toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00"
  );
  console.log("topping text1: " + text1);
  console.log("Purchase Total: " + "$" + runningTotal + ".00");
  
  // Update HTML elements to display order summary and final total
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
