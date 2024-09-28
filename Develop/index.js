// Packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// User questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'age',
        message: 'How old are you?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Pet',
        message: 'Do you have any pets?',
    },
    {
        type: 'input',
        name: 'FavoriteColor',
        message: 'What is your favorite color?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = JSON.stringify(answers, null, 2);
        writeToFile('README.md', data);
    }).catch((error) => {
        console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();
