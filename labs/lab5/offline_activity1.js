//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked.
function showNum(value) {
  document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function decrement() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num--;
    document.frmCalc.txtNumber.value = num;
  }
}

//Increases value of displayed number by 1.
//Copy of decrement() function.
function increment() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num++;
    document.frmCalc.txtNumber.value = num;
  }
}

//The following function is called when "add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "add";
  }
}

function subtract() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "sub";
  }
}

function multiply() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "mult";
  }
}

function divide() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "div";
  }
}

function power() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "power";
  }
}

function square() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    calc = "square";
    calculate();
  }
}

function sqrt() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    calc = "sqrt";
    calculate();
  }
}

function floor() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    calc = "floor";
    calculate();
  }
}

function round() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    calc = "round";
    calculate();
  }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.
function calculate() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  // adds two numbers
  if (calc === "add") {
    var total = prevCalc + num;
  }

  // subtracts numbers from each other
  else if (calc === "sub") {
    var total = prevCalc - num;
  }

  // multiplication
  else if (calc === "mult") {
    var total = prevCalc * num;
  }

  // divide
  else if (calc === "div") {
    var total = prevCalc / num;
  }

  // power
  else if (calc === "power") {
    let temp = prevCalc;
    for (let i = 1; i < num; i++) {
      temp = temp * prevCalc;
    }
    var total = temp;
  }

  // square
  else if (calc === "square") {
    var total = prevCalc * prevCalc;
  }

  // sqrt
  else if (calc === "sqrt") {
    var total = Math.sqrt(prevCalc);
  }

  // floor
  else if (calc === "floor") {
    var total = Math.floor(prevCalc);
  }

  // round
  else if (calc === "round") {
    var total = Math.round(prevCalc);
  }

  // doesn't need to be in each if statement
  if (calc !== "") {
    document.frmCalc.txtNumber.value = total;
  }
}

function clear() {
  document.frmCalc.txtNumber.value = "";
  prevCalc = 0;
  calc = "";
}
