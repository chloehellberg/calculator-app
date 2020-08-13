function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
  // $("form#subtract").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#subtract1").val());
  //   const number2 = parseInt($("#subtract2").val());
  //   const result = subtract(number1, number2);
  //   $("#output").text(result);
  // });
  // $("form#multiply").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#multiply1").val());
  //   const number2 = parseInt($("#multiply2").val());
  //   const result = multiply(number1, number2);
  //   $("#output").text(result);
  // });
  // $("form#divide").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#divide1").val());
  //   const number2 = parseInt($("#divide2").val());
  //   const result = divide(number1, number2);
  //   $("#output").text(result);
  // });
});


