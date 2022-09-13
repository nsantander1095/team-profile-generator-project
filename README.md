# Team Profile Generator

## Table of Contents 
* [Description](#description)
* [Usage](#usage)
* [Visuals](#visuals)

## Description

The team profile generator is a command line application run through node using the inquirer npm for user input and the jest npm for testing. The application takes in user data centered on the roster of a web dev team, and then generates a HTML page from the input. 

The app begins with the prompts for a team manager, which include: name, ID, email, and office number. Then you will be prompted to choose whether to add either an engineer, an intern, or to not add any more team members. If you select the engineer, then you will be prompted for name, ID, email, and GitHub handle. If you select the intern, you will be prompted for name, ID, email, and school. 

After both of these options you will be prompted to add any more team members for as many team members you would like to add. If you select at any point to not add more members, a "team.html" file will be deposited in the included "dist" file. That HTML file is preformatted using both the Bootstrap framework and custom CSS.

## Usage

Upon cloning the repository, you will need to run some commands:

* to download dependencies and make sure they are up to date:

    ```
    npm i
    ```
* to test if all class scripts run properly:

    ```
    npm test
    ```
* to run the app itself:

    ```
    node index.js
    ```

## Visuals

To see a full walkthorugh of how to download dependencies, test the class scripts, and to use the app go to this [link.]()