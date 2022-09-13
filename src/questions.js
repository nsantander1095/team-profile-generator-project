const questions = {
    intern : [
        {
            name: 'name',
            type: 'input',
            message: 'What is the intern\'s name?',
        },
        {
            name: 'id',
            type: 'number',
            message: 'What is the intern\'s id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the intern\'s email?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the intern\'s school?',
        }
    ],
    menu: [{
        name: 'value',
        type: 'rawlist',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members.',
        ],
    }],
    engineer:  [
        {
            name: 'name',
            type: 'input',
            message: 'What is the engineer\'s name?',
        },
        {
            name: 'id',
            type: 'number',
            message: 'What is the engineer\'s id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineer\'s email?',
        },
        {
            name: 'gitHub',
            type: 'input',
            message: 'What is the engineer\'s GitHub username?',
        },
    ],
    manager: [
        {
            name: 'name',
            type: 'input',
            message: 'What is the team manager\'s name?',
        },
        {
            name: 'id',
            type: 'number',
            message: 'What is the team manager\'s id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the team manager\'s email?',
        },
        {
            name: 'officeNumber',
            type: 'number',
            message: 'What is the team manager\'s office number?',
        },
    ]
}

module.exports = questions;