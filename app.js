#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([{
        name: "q1",
        type: "list",
        message: (chalk.bold.red("Q1:Which planet is known as the Red Planet? ")),
        choices: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"]
    }, {
        name: "q2",
        type: "list",
        message: (chalk.bold.red("Q2: Which element has the chemical symbol 'O'? ")),
        choices: ["A) Gold", "B) Oxygen", "C) Silver", "D) Iron"]
    }, {
        name: "q3",
        type: "list",
        message: (chalk.bold.red("Q3: What is the largest mammal in the world? ")),
        choices: ["A) Elephant", "B) Blue Whale", "C) Great White Shark", "D) Giraffe"]
    }, {
        name: "q4",
        type: "list",
        message: (chalk.bold.red("Q4: What is the smallest prime number? ")),
        choices: ["A) 0", "B) 1", "C) 2", "D) 3"]
    }, {
        name: "q5",
        type: "list",
        message: (chalk.bold.red("Q5: What is the hardest natural substance on Earth? ")),
        choices: ["A) Gold", "B) Iron", "C) Diamond", "D) Platinum"]
    }, {
        name: "q6",
        type: "list",
        message: (chalk.bold.red("Q6: Who is CRISTIANO RONALDO ")),
        choices: ["A) Engineer", "B) Pilot", "C) Footballer", "D) Cricketer"]
    }
]);
let score = 0;
switch (quiz.q1) {
    case "B) Mars":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
switch (quiz.q2) {
    case "B) Oxygen":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
switch (quiz.q3) {
    case "B) Blue Whale":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
switch (quiz.q4) {
    case "C) 2":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
switch (quiz.q5) {
    case "C) Diamond":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
switch (quiz.q6) {
    case "C) Footballer":
        console.log("CORRECT");
        ++score;
        break;
    default:
        console.log("WRONG ANSWER");
}
console.log(`SCORE: ${score}`);
if (score == 6) {
    console.log(chalk.bold.blue("YOU ARE GENIUS"));
}
