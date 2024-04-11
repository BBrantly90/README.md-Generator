// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a short description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps to install the project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter Contributions:',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'How do you test the project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose your license for the project:',
        name: 'license',
        choices: [
            { value: 'Apache' },   
            { value: 'BSD3' },  
            { value: 'LGPL' },  
            { value: 'MIT' },  
            { value: 'MPL' }, 
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where is this application deployed at?',
        name: 'deploy',
    },
])

.then((data)=> {
    fs.writeFile(`${data.github}.md`, generateMarkdown(data), (err)=>
err ? console.error(err) : console.log('Success! The README.md was generated'))
})
