// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = (team) => {
  // create the manager html
  const generateCard = (employee) => {
    return `
        <div class = "card col-4 m-2" style = "width: 18rem;">
            <div class = "card-body">
                <div class = "card-title">
                    <h2>${employee.getName()}</h2>
                    <h3>
                        ${generateLogo(employee.getRole())}
                    </h3>
                </div>
                <div class = "card-text">
                    <ul>
                        <li>
                            ID: ${employee.getId()}
                        </li>
                        <li>
                            Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                        </li>
                        <li>
                            ${generateItem(employee)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
  };

  const generateLogo = (role) => {
    switch (role) {
      case "Manager":
        return `<i class="fas fa-mug-hot mr-2"></i> Manager`;
        break;
      case "Engineer":
        return `<i class="fas fa-glasses mr-2"></i> Engineer`;
        break;
      default:
        return `<i class="fas fa-user-graduate mr-2"></i> Intern`
        break;
    }
  };

  const generateItem = (employee) => {
    switch (employee.getRole()) {
      case "Manager":
        return `Office number: ${employee.getOfficeNumber()}`;
        break;
      case "Engineer":
        return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a>`;
        break;
      default:
        return `School: ${employee.getSchool()}`
        break;
    }
  };

//   const generateManager = (manager) => {
//     return `
//         <div class = "card col-4 m-2" style = "width: 18rem;">
//             <div class = "card-body">
//                 <div class = "card-title">
//                     <h2>${manager.getName()}</h2>
//                     <h3>
//                         <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
//                     </h3>
//                 </div>
//                 <div class = "card-text">
//                     <ul>
//                         <li>
//                             ID: ${manager.getId()}
//                         </li>
//                         <li>
//                             Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
//                         </li>
//                         <li>
//                             Office number: ${manager.getOfficeNumber()}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         `;
//   };

//   // create the html for engineers
//   const generateEngineer = (engineer) => {
//     return `
//         <div class = "card col-4 m-2" style = "width: 18rem;">
//             <div class = "card-body">
//                 <div class = "card-title">
//                     <h2>${engineer.getName()}</h2>
//                     <h3>
//                         <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
//                     </h3>
//                 </div>
//                 <div class = "card-text">
//                     <ul>
//                         <li>ID: ${engineer.getId()}</li>
//                         <li>
//                             Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
//                         </li>
//                         <li>
//                             GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         `;
//   };

//   // create the html for interns
//   const generateIntern = (intern) => {
//     return `
//         <div class = "card col-4 m-2" style = "width: 18rem;">
//             <div class = "card-body">
//                 <div class = "card-title">
//                     <h2>${intern.getName()}</h2>
//                     <h3>
//                         <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
//                     </h3>
//                 </div>
//                 <div class = "card-text">
//                     <ul>
//                         <li>ID: ${intern.getId()}</li>
//                         <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
//                         <li>School: ${intern.getSchool()}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         `;
//   };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateCard(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateCard(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateCard(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    <body>
        <header class = "jumbotron jumbotron-fluid mb-3 p-3">
            <h1>My Team</h1>
        </header>
        <main class = "container row mx-auto">
            ${generateTeam(team)}
        </main>
    </body>
</html>
    `;
};
