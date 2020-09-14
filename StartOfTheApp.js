// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
//Naming convention for const is All capital letters
const TIME_SPAN = [
  { span: "Daily", days: 1 },
  { span: "Weekly", days: 7 },
  { span: "Fortnightly", days: 14 },
  { span: "Monthly", days: 30.45 },
];

//Have already written all the other consts before realising the convention so will
//take to long to correct everything else with the references etc.
const costs = [
  { name: "Rent", amount: 960.0, span: TIME_SPAN[3] },
  { name: "Food", amount: 70.0, span: TIME_SPAN[1] },
  { name: "Gym", amount: 40.0, span: TIME_SPAN[3] },
  { name: "Haircut", amount: 32.0, span: TIME_SPAN[3] },
];

const income = [
  { name: "Wages", amount: 1700.0, span: TIME_SPAN[3] },
  { name: "Student Grant", amount: 300.0, span: TIME_SPAN[3] },
];

//const must be initialised. Following will throw an error
//const FOO

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

//Example of template literal
console.log(`Total monthly income is ${total_monthly_income}€`);
var potential_savings;

function remaining_budget(income, costs) {
  //let is a block scope variable
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

//To show let is block scope. the following function will provide different amounts
//due to the let being block scope
function weekly_budget() {
  let weekly_bud = 300;
  {
    let weekly_bud = 100;
    console.log(`This weekly budget is ${weekly_bud}€`);
  }
  console.log(`This weekly budget is ${weekly_bud}€`);
}

weekly_budget();

//To show that let is block scope. If we call it in global with this. it will return undefined
let beer_money = 200;
var shots_money = 100;

console.log(this.beer_money);
console.log(this.shots_money);

//if we call it just using the variable name it will print
console.log(beer_money);

/*If we call a let before it is defined it will throw an error. I have commented out 
//code below but if uncommented this throws a ReferenceError. Temporal dead zone
console.log(petrol_money);

let petrol_money = 50;*/

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

//Example of a simple normal function written as an arrow function
function monthly_weekly_converter(weekly_amount) {
  return weekly_amount * 4;
}
//the above function could be written as follows as an arrow function
let monthly_weekly_conv = (weekly_amount) => weekly_amount * 4;

//Map
const weekly_bill_amounts = [20, 50, 30, 35];

const monthly_weekly_map = weekly_bill_amounts.map((amount) => amount * 4);

console.log(weekly_bill_amounts);
console.log(monthly_weekly_map);

//Also an example of trailing commas at the end
let meal_planner = [
  { meal: "Salmon & Mash", price: 12.5 },
  { meal: "Pizza", price: 10.5 },
  { meal: "Spaghetti Bolognaise", price: 8 },
];

let meal_planner_map = meal_planner.map((obj) => {
  let newObj = {};
  newObj[obj.meal] = obj.price;
  return newObj;
});

console.dir(meal_planner);
console.dir(meal_planner_map);

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

//Const is permanent but we can change the value as follows
account.balance = -100;

balance_checker(account);

account.overdraft = -50;

balance_checker(account);

//If const was an array we would change it by account.push(value)

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

  //Examples of spread syntax ...
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

//functions2
let overbudget = () => {
  console.log("You are over budget!");
};

let overbudget1 = (name) => {
  console.log(`${name}, you are over budget!`);
};

let overbudget2 = (name, amount) => {
  console.log(`${name}, you are over budget by ${amount}€`);
};

overbudget();
overbudget1("Dan");
overbudget2("Dan", 300);

var yearly_costs = ((monthly_costs) => {
  return monthly_costs * 12;
})(total_monthly_costs);

console.log(`Total yearly costs are ${yearly_costs}€`);

//Using the filter feature then iterating through and printing using forEach
const old_bills = ["Electric", "Gas", "Bar tab", "Sofa"];

//Using _ to define that the first paramter is not being used and is skipped
const new_bills = old_bills.filter((_, index) => index % 2 == 0);
console.dir(new_bills);

old_bills.forEach((bill) => console.log(`- ${bill}`));

const outstanding_bills = [
  { name: "Electric", amount: 200.0 },
  { name: "Gas", amount: 50.0 },
  { name: "Bar tab", amount: 150.0 },
  { name: "Sofa", amount: 50.0 },
];

var total_outstanding = 0;
outstanding_bills.forEach((bill) => (total_outstanding += bill.amount));

console.log(`The total outstanding bills is ${total_outstanding}€`);

const urgent_bills = outstanding_bills.filter((bill) => bill.amount >= 100.0);
console.dir(outstanding_bills);
console.dir(urgent_bills);

//functions3

//default function value for housing
var student_support = function (maintenance, housing = 0) {
  var grant_total = maintenance + housing;
  return grant_total;
};

//Should return 1000 - Checked and it does
console.log(`Both = ${student_support(300, 700)}`);
//Should return 300 as default value will be used- Checked and it does
console.log(`One = ${student_support(300)}`);
//Should return 301 as true is converted to one - - Checked and it does
console.log(`true = ${student_support(300, true)}`);
//Should return 300 as false is converted to zero - - Checked and it does
console.log(`false = ${student_support(300, false)}`);
//Should return 300 as default value will take undefined place - - Checked and it does
console.log(`undefined = ${student_support(300, undefined)}`);
//Should return 300 as default value will take null place - - Checked and it does
console.log(`null = ${student_support(300, null)}`);

//Examples of forEach for map, set and array
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

function logSetElements(value1, value2, set) {
  console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

const weekly_food_prices = [1.5, 2.99, 1.0, 6.0];

const monthly_food_prices = weekly_food_prices.map((price) => price * 4);

console.log(monthly_food_prices);

//we can also convert a for loop to forEach as follows
const fortnightly_food_prices = [];
for (let i = 0; i < weekly_food_prices.length; i++) {
  fortnightly_food_prices.push(weekly_food_prices[i] * 2);
}

const fortnightly_food_prices1 = [];
weekly_food_prices.forEach((price) => fortnightly_food_prices1.push(price * 2));

console.log(fortnightly_food_prices);
console.log(fortnightly_food_prices1);

//Creating a class and then extending it
class budget {
  constructor() {
    this.budget = 200;
  }
}

console.log(new budget().budget);
// expected output: 200

class savings2 extends budget {
  constructor() {
    super();
    this.saving = this.budget * 0.2;
  }
}

console.log(new savings2().saving);
// expected output: 40

//spead syntax with 'new'

const date_info = [2020, 10, 15];

const bill_date = new Date(...date_info);

console.log(bill_date);

//Destructuring the Array

const [year, month, day] = date_info;
console.log(`The bill is due on ${day}.${month + 1}.${year}`);

const copy_date_info = [...date_info, 56, 89, 75];
const [year1, month1, day1, ...random_numbers] = copy_date_info;

console.log(year1);
console.log(month1);
console.log(day1);
console.log(random_numbers);

//Computed property names

let c = 0;
let bill_number = {
  ["Bill" + ++c]: 500,
  ["Bill" + ++c]: 200,
  ["Bill" + ++c]: 100,
};

console.log(bill_number.Bill1);
console.log(bill_number.Bill2);
console.log(bill_number.Bill3);

let saving_acct1 = 200,
  saving_acct2 = 5000,
  saving_acct3 = "You dont have another saving account",
  saving_acct4 = {};

let saving_accounts = {
  saving_acct1,
  saving_acct2,
  saving_acct3,
  saving_acct4,
};

console.log(`Saving account 1 has ${saving_accounts.saving_acct1}€`);
console.log(`Saving account 2 has ${saving_accounts.saving_acct2}€`);

//The following would not work in JSON
var myObj = {
  name: "John",
  age: 31,
  [saving_acct1]: { saving_acct1, saving_acct2 },
};
var myJSON = JSON.stringify(myObj);

console.log(myJSON);

//If an object has a function we can now use shorthand
const obj1 = {
  ex_func() {
    console.log("Function short hand example 1");
  },
  ex_func1() {
    console.log("Function short hand example 2");
  },
};
console.log(obj1.ex_func);

//The followinng is using the new notation to define a generator method with *
const num_bills = {
  *bills() {
    let number_bills = 0;
    while (true) {
      yield number_bills++;
    }
  },
};

const no_bills = num_bills.bills();

console.log(`You have ${no_bills.next().value} bills to pay`);
console.log(`You have ${no_bills.next().value} bills to pay`);

//Can also do async methods short hand too.
const new_num_bills = {
  async *obj_func() {
    let number_bills = 0;
    while (true) {
      yield number_bills++;
    }
  },
};

//Testing example from sheet
var a = JSON.parse('{"123":"Yeah"}');

//console.log(a.123); // Error, unexpected number
//console.log(a."123"); // Error, unexpected String
console.log(a["123"]); // ok, prints: Yeah
console.log(a[123]); // ok, prints: Yeah

//Falsy values example from Juhani's example. Using it to debug and see how it works
var array = [
  // falsy values:
  false,
  null,
  undefined,
  0,
  NaN,
  "",
  "",
  ``,
  document.all,
  "true",
  "false",
  true,
  1,
  "4",
  "2",
  " 5 ",
  5,
  "6",
  "ö",
  /[\u0400-\u04FF]+/g,
];

for (let i = 0; i < array.length; i++) {
  let inputText = array[i];
  let number = Number(inputText);

  if (
    (!inputText && inputText !== 0) ||
    typeof array[i] === "boolean" ||
    (typeof inputText === "string" && inputText.trim().length === 0) ||
    Number.isNaN(number) ||
    number < 0 ||
    number > 5
  ) {
    // If the 'falsy' version
    if (typeof array[i] === "string") {
      console.log(
        "problem: >'" + inputText + "'< with number conversion into: " + number
      );
    } else {
      console.log(
        "problem: >" + inputText + "< with number conversion into: " + number
      );
    }
  }
  if (
    inputText &&
    typeof inputText === "string" &&
    inputText.trim().length !== 0 &&
    !Number.isNaN(number) &&
    number >= 0 &&
    number <= 5
  ) {
    if (typeof array[i] === "string") {
      console.log(
        "correct: *'" + inputText + "'* with number conversion into: " + number
      );
    } else {
      console.log(
        "correct: *" + inputText + "* with number conversion into: " + number
      );
    }
  }
}
