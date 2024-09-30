// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license) {
        return `![License ${license}](https://img.shields.io/badge/License-${license.replace(" ","_")}-blue.svg)`;
   } else {
       return '';}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
        return '[GPL 3.0](https://opensource.org/licenses/GPL-3.0)';
    } else if (license === 'BSD 3') {
        return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
${renderLicenseBadge(license)}

This project is licensed under the ${license} license. Please see ${renderLicenseLink(license)}
for more information.`;
}

//function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ${license}


   ## Contributing 
   ${data.contributing}

   ## Tests
   ${data.tests}

   ## Questions
   For any questions, please contact me using the information below:
   Email: ${data.email}
   Github: ${data.github}
  `;
}
export default generateMarkdown;