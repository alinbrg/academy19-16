// დავალება:
// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

const currentDay = new Date().getDay();
let dayName;

switch (currentDay) {
	case 0:
		dayName = "კვირა";
		break;
	case 1:
		dayName = "ორშაბათი";
		break;
	case 2:
		dayName = "სამშაბათი";
		break;
	case 3:
		dayName = "ოთხშაბათი";
		break;
	case 4:
		dayName = "ხუთშაბათი";
		break;
	case 5:
		dayName = "პარასკევი";
		break;
	case 6:
		dayName = "შაბათი";
		break;
	default:
		dayName = "not correct input";
		break;
}

// console.log(dayName);

// 2. დაწერეთ for ციკლი, 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 150; i++) {
	// console.log(i);
}

// 3. დაწერეთ while ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
// let i = 0;
// while (i < 100) {
// 	// console.log(i);
// 	i++;
// }
// 4. დაწერეთ do while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
let j = 0;
do {
	// console.log(j);
	j++;
} while (j < 50);
// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 20- მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი
let arr = [];

for (let i = 1; i <= 20; i++) {
	arr.push(i * i);
}

// console.log(arr);

// 6. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი script.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან. შემდეგ დაწერეთ loop (for ან while)  და მასივის თითოეულ ელემენტზე შეამოწმეთ diff პარამეტრის მნიშვნელობა თუ არის უარყოფითი. თუ უარყოფითია, კონსოლში გამოიტანეთ ასეთი ვალუტების სახელი და diff პარამეტრის მნიშვნელობაც.

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.1320",
		diffFormated: "0.0209",
		rate: 7.132,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0209,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.7264",
		diffFormated: "0.0014",
		rate: 6.7264,
		name: "სომხური დრამი",
		diff: -0.0014,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rateFormated: "1.5409",
		diffFormated: "0.0045",
		rate: 1.5409,
		name: "აზერბაიჯანული მანათი",
		diff: -0.0045,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1799",
		diffFormated: "0.0055",
		rate: 1.1799,
		name: "ჩეხური კრონა",
		diff: 0.0055,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7791",
		diffFormated: "0.0040",
		rate: 2.7791,
		name: "ევრო",
		diff: 0.004,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.1674",
		diffFormated: "0.0203",
		rate: 3.1674,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: 0.0203,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
];

const currLength = currencies.length;

for (let i = 0; i < currLength; i++) {
	// console.log(currencies[i]);
	if (currencies[i].diff < 0) {
		// console.log(currencies[i].diff, currencies[i].name);
	}
}

// console.log(i);
// scopes

// const a = 10;

// if (1) {
// 	const a = 30;
// 	if (1) {
// 		const a = 20;
// 	}
// 	if (1) {
// 		console.log(a);
// 	}
// }
// console.log(a);

// function

function printHello() {
	console.log("hello");
}

// printHello();
// printHello();
// printHello();
// printHello();

function welcomeUser(userName) {
	console.log(`hello, ${userName}`);
}

// welcomeUser("alina");
// welcomeUser("nino");

const action = "";
const price = 100;

let totalPrice = 0;

function changeCart(action, price) {
	if (action === "add") {
		totalPrice += price;
	}
	if (action === "decr") {
		totalPrice -= price;
	}
	console.log(totalPrice, action, price);
}

// changeCart("add", 300);
// changeCart("add", 500);
// changeCart("decr", 100);

console.log(sum(100, 200));

function sum(a, b) {
	// console.log(a + b);
	return a + b;
}

const sumFn = function (a, b) {
	return a + b;
};

const sumArrowFn = (a, b) => {
	return a + b;
};

console.log(sumFn(10, 30));
console.log(sumArrowFn(20, 30));

const x = 5,
	y = 6;

const sum1 = sum(2, 4);
const sum3 = sum(x, sum(2, 4));
// console.log(sum3);
// console.log(sum1);
const sum2 = sum;

currencies.forEach((currency, index) => {
	if (index > 3) {
		console.log("index is " + index);
	}
	if (currency.diff < 0) {
		console.log(currency.diff, currency.name);
	}
});

// const callbackFn = (currency, index) => {
// 	if (index > 3) {
// 		console.log("index is " + index);
// 	}
// 	if (currency.diff < 0) {
// 		console.log(currency.diff, currency.name);
// 	}
// };

// currencies.forEach(callbackFn);

const filterCbFn = (el) => {
	return el.diff < 0;
};
const filterCbFn2 = (el) => el.diff < 0;

const filteredCurrencies = currencies.filter((el) => {
	return el.diff < 0;
});

// console.log(filteredCurrencies);

const firstCorrectCurrency = currencies.find((el) => {
	return el.diff < 0;
});

// console.log(firstCorrectCurrency);

const mappedCurrencies = currencies.map((el) => {
	return el.code;
});

// console.log(mappedCurrencies);

const isSomeDiffEqualToZero = currencies.some((currency) => {
	return currency.diff === 0;
});

// console.log(isSomeDiffMoreThanZero);

const isEveryDiffEqualToZero = currencies.every((currency) => {
	return currency.diff < 10;
});

// console.log(isEveryDiffEqualToZero);

const chars = "ab, cd, ef, gh, ij, kl, mo, pq, rs, tu, vw, xy, z";

const charsArr = chars.split(", ");

const newStr = charsArr.join("????");
// console.log(charsArr);
// console.log(charsArr.includes("ab"));
