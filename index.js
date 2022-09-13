const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const managerQues = require('./src/managerQues');
// const engineerQues = require('./src/engineerQues');
const questions = require("./src/questions");
const pageTemplate = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");

const prompt = inquirer.createPromptModule();
const team = [];

// TODO: CODE GOES HERE
async function addTeamMember() {
  action = await prompt(questions.menu);
  switch (action.value) {
    case "Engineer":
      var data = await prompt(questions.engineer);
      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      team.push(newEngineer);
      addTeamMember();
      break;
    case "Intern":
      var data = await prompt(questions.intern);
      const newIntern = new Intern(data.name, data.id, data.email, data.school);
      team.push(newIntern);
      addTeamMember();
      break;
    default:
      fs.writeFileSync(`dist/team.html`, pageTemplate(team));
      break;
  }
}

//   prompt(questions.menu).then((answer) => {
//     if (answer.value === "Engineer") {
//       prompt(questions.engineer).then((data) => {
//         const newEngineer = new Engineer(
//           data.name,
//           data.id,
//           data.email,
//           data.gitHub
//         );
//         team.push(newEngineer);
//         addTeamMember();
//       });
//     }
//     if (answer.value === "Intern") {
//       prompt(questions.intern).then((data) => {
//         const newIntern = new Intern(
//           data.name,
//           data.id,
//           data.email,
//           data.school
//         );
//         team.push(newIntern);
//         addTeamMember();
//       });
//     }
//     if (answer.value === "I don't want to add any more team members.") {
//       fs.writeFileSync(`dist/team.html`, pageTemplate(team));
//     }
//   });
// }

async function init() {
  const data = await prompt(questions.manager);
  const teamManager = new Manager(
    data.name,
    data.id,
    data.email,
    data.officeNumber
  );
  team.push(teamManager);
  addTeamMember();
}

init();
