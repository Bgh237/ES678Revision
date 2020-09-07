// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const timeSpan = [
  { span: "Daily", days: 1 },
  { span: "Weekly", days: 7 },
  { span: "Fortnightly", days: 14 },
  { span: "Monthly", days: 30.45 },
];

const costs = [
  { name: "Rent", amount: 960.0, span: timeSpan[3] },
  { name: "Food", amount: 70.0, span: timeSpan[1] },
  { name: "Gym", amount: 40.0, span: timeSpan[3] },
  { name: "Haircut", amount: 32.0, span: timeSpan[3] },
];

const income = [
  { name: "Wages", amount: 1700.0, span: timeSpan[3] },
  { name: "Student Grant", amount: 300.0, span: timeSpan[3] },
];

// Then do whatever reports / analysis or so, with all the costs
var total_monthly_income = 0;

var i;

for (i = 0; i < income.length; i++) {
  if (income[i].span.days === 1) {
    total_monthyl_income += income[i].amount * 30.45;
  } else if (income[i].span.days === 7) {
    total_monthly_income += income[i].amount * 4;
  } else if (income[i].span.days === 14) {
    total_monthly_income += income[i].amount * 2;
  } else {
    total_monthly_income += income[i].amount;
  }
}

console.log(`Total monthly income is ${total_monthly_income}€`);
var potential_savings;

function remaining_budget(income, costs) {
  let remaining_money = 0;

  remaining_money = income - costs;

  potential_savings = remaining_money * 12;
  if (remaining_money >= 0) {
    console.log(
      `After costs are taken away from your income you have ${remaining_money}€ left per month`
    );
    console.log(
      `This means you could potentially save ${potential_savings}€ per year`
    );
  } else {
    console.log(
      `You are ${remaining_money}€ over budget. Reduce your spending`
    );
    console.log(
      `This means you could potentially be in debt by ${potential_savings}€ per year`
    );
  }

  potential_savings = remaining_money * 12;
}
var total_monthly_costs = 0;

function cost_calc(costs) {
  var daily_cost = 0;
  var weekly_cost = 0;
  var fortnightly_cost = 0;
  var monthly_cost = 0;

  var i;

  name = "Dave";

  for (i = 0; i < costs.length; i++) {
    /*Example of hoisting here*/
    var name = "John";

    if (costs[i].span.days === 1) {
      daily_cost += cost[i].amount * 30.45;
    } else if (costs[i].span.days === 7) {
      weekly_cost += costs[i].amount * 4;
    } else if (costs[i].span.days === 14) {
      fortnightly_cost += costs[i].amount * 2;
    } else {
      monthly_cost += costs[i].amount;
    }
  }
  console.log(name);
  total_monthly_costs =
    daily_cost + weekly_cost + fortnightly_cost + monthly_cost;
}
cost_calc(costs);

console.log("Total monthly costs are " + total_monthly_costs + "€");

remaining_budget(total_monthly_income, total_monthly_costs);

remaining_budget(300, 500);

function finances(income, costs) {
  let money = 0;
  money = income - costs;

  return money;
}

const overdraft = -300;

let bank_balance = 0;

bank_balance = finances(total_monthly_income, total_monthly_costs);

const account = {
  firstName: "Simon",
  lastName: "Barry",
  balance: bank_balance,
  overdraft: overdraft,
};

const account2 = {
  firstName: "Simon",
  lastName: "Barry",
  balance: bank_balance,
  overdraft: overdraft,
};

function balance_checker(account) {
  if (account.balance >= 0) {
    console.log(`Name: ${account.firstName} ${account.lastName}`);
    console.log(`Balance: ${account.balance}€`);
    console.log(`Overdraft: ${account.overdraft}€`);
  } else if (account.balance >= account.overdraft && account.balance < 0) {
    let overdraft_remaining = account.balance - account.overdraft;
    console.log(`Name: ${account.firstName} ${account.lastName}`);
    console.log(`Balance: ${account.balance}€`);
    console.log(`Overdraft: ${account.overdraft}€`);
    console.log(`You have ${overdraft_remaining}€ remaining in your overdraft`);
  } else {
    let over_overdraft = account.overdraft + account.balance * -1;
    console.log(`Name: ${account.firstName} ${account.lastName}`);
    console.log(`Balance: ${account.balance}€`);
    console.log(
      `You are ${over_overdraft}€ over your overdraft limit. Make a payment immeadiately`
    );
  }
}
balance_checker(account);

account.balance = -100;

balance_checker(account);

account.overdraft = -50;

balance_checker(account);

var necessary_weekly_shop = {};
var unnecessary_weekly_shop = [];

{
  let f1 = "Oats";
  let f2 = "Eggs";
  let f3 = "Chocolate";
  let f4 = "Soda";

  let essentials = { f1, f2 };
  console.log("Essential shopping items: ");
  console.dir(essentials);

  let dairy = { f2: f2 };
  console.log("Dairy items: ");
  console.dir(dairy);

  let essentials_costs = { [f1]: 1.0, [f2]: 2.5 };
  console.log("Cost of essential items(€): ");
  console.dir(essentials_costs);

  let shopping_list = { ...essentials, f3, f4 };

  console.log("Shopping list: ");
  console.dir(shopping_list);

  let new_shopping_list = { ...shopping_list, f5: "Bananas", f6: "Apples" };
  new_shopping_list.f3 = "Kiwi fruits";
  new_shopping_list.f4 = "Kombucha";

  console.log("New shopping list: ");
  console.dir(new_shopping_list);

  let item_costs = [1.0, 2.5];

  let shopping_cost = 0.0;

  item_costs.forEach((item) => console.log(item) + "€");

  console.log("Total costs: " + item_costs);
  console.log(item_costs.map((item) => (shopping_cost += item)));
  console.log("The total cost of the shopping is " + shopping_cost + "€");
}

if (false) {
  console.log("This is a falsey if statement and will not show in the page!");
}

//objects 1
{
  let budgets = { food_budget: 100, luxury_budget: 80, sports_budget: 40 };
  const { luxury_budget, sports_budget, food_budget } = budgets;

  console.log("Weekly food budget is: " + food_budget + "€");
  console.log("Weekly sport budget is: " + sports_budget + "€");
  console.log("Weekly luxury budget is: " + budgets.luxury_budget + "€");

  // checking if the const name had to be the same as the name in the object
  let qwerty = { asdfg: 100, zxcvb: 200, poiuy: 300 };
  const { abc, def, ghi } = qwerty;

  //returns undefined
  console.log("ghi: " + ghi);
}

//functions1

function budget_calc(food, luxury, sports) {
  "use strict";
  var monthly_total = (food + luxury + sports) * 4;
  return monthly_total;
}

var monthly_budget_calc = function (food, luxury, sports) {
  "use strict";
  var monthly_total = (food + luxury + sports) * 4;
  return monthly_total;
};

console.log("Monthly budget is " + budget_calc(100, 200, 300) + "€");
console.log("Monthly budget is " + monthly_budget_calc(100, 200, 300) + "€");

//Playing with functions within a function...funception
var savings = function (income, expenditure) {
  "use strict";
  if (income > expenditure) {
    return function (current_savings) {
      console.log(
        "You have increased your savings to " +
          (income - expenditure + current_savings) +
          "€"
      );
    };
  } else {
    return function (current_savings) {
      console.log(
        "Your savings are now only " +
          (income - expenditure + current_savings) +
          "€"
      );
    };
  }
};

savings(2500, 1700)(200);
var savings1 = savings(1500, 1700);

savings1(500);

//IIFE
(function (bills) {
  "use strict";
  console.log("You have a total of " + bills + "€ worth of bills this month!");
})(1200);

var household_income = function (income1, income2) {
  "use strict";

  var total_income;
  income2 = Number(income2);

  if (Number.isNaN(income2)) {
    total_income = income1;
  } else {
    total_income = income1 + income2;
  }
  return total_income;
};

console.log("Total household income is " + household_income(1700, 2500) + "€");
console.log("Total household income is " + household_income(1700) + "€");

var household_income1 = function (income1, income2) {
  "use strict";

  var total_income;
  income1 = Number(income1);

  if (Number.isNaN(income1)) {
    total_income = income2;
  } else {
    total_income = income1 + income2;
  }
  return total_income;
};
//true converts to 1 so following returns 1901. Tested false also but as false would convert to 0 it doesnt matter
console.log("Total household income is " + household_income1(true, 1900) + "€");

//string invokes the NaN if statement as does null
console.log(
  "Total household income is " + household_income1("steve", 1900) + "€"
);

//Using a function to take another function as a parameter as call that function within itself
var billsframework = function (func) {
  "use strict";
  func(2, 20);
};

//This is the function to be called by the previous function
//The _ is used as a placeholder
var bills = function (_, amount) {
  "use strict";
  console.log(
    `Weekly bills of ${amount}€ would be a monthly cost of ${amount * 4}€`
  );
};

billsframework(bills);
