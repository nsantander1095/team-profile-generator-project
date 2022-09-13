const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQues = require('./src/managerQues');
const engineerQues = require('./src/engineerQues');
const internQues = require('./src/internQues');
const pageTemplate = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();
const team = [];

// TODO: CODE GOES HERE
function addTeamMember() {
    prompt([{
        name: 'value',
        type: 'rawlist',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members.',
        ],
    }]).then((answer) => {
        console.log(answer);
        if (answer.value === 'Engineer') {
            prompt(engineerQues).then((data) => {
                const newEngineer = new Engineer(data.name, data.id, data.email, data.gitHub);
                team.push(newEngineer);
                addTeamMember();
            })
        }
        if (answer.value === 'Intern') {
            prompt(internQues).then((data) => {
                const newIntern = new Intern(data.name, data.id, data.email, data.school);
                team.push(newIntern);
                addTeamMember();
            })
        }
        if (answer.value === 'I don\'t want to add any more team members.') {
            console.log(team);
            fs.writeFileSync(`dist/team.html`, pageTemplate(team));
        }
    });
}

function init() {
    prompt(managerQues).then((data) => {
        const teamManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(teamManager);
        addTeamMember();
    })
}

init();