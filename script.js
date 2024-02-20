  function showloan(){
    alert("Welcome to loany App");
  }

  function Application() {
    const userName = prompt('Enter your name:');
    const userIncome = parseFloat(prompt('Enter your monthly income:'));

    if (isNaN(userIncome)) {
      alert('Invalid input. Please enter valid numbers.');
      return;
    }

    const result = calculateLoan(userName, userIncome);
    alert(result);
  }

  function calculateLoan(name, income) {
    const monthlySavings = income;
    const eligibilityThreshold = 10000; 
    if (monthlySavings > eligibilityThreshold) {
      alert("Please Wait");
      alert("Processing.........");
      return `${name}, you are eligible for a loan!`;
    } else {
            alert("Please Wait");
      alert("Processing.........");
      return `${name}, sorry, you are not eligible for a loan at the moment.`;
    }
  }


  showloan();
  Application();

