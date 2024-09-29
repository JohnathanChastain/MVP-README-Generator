// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `## License
    This project is licensed under the ${license} license. Please see 
    https://choosealicense.com/licenses/mit/ for more information.`;
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
   [Installation](#installation)
   [Usage](#usage)
   [License](#license)
   [Contributing](#contributing)
   [Tests](#tests)
   [Questions](#questions)

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ${renderLicenseSection(data.license)}

   ## Contributing 
   ${data.contributing}

   ## Tests
   ${data.tests}

   ## Questions
   Email: ${data.email}
   Github: ${data.github}
   LinkedIn: ${data.linkedin}
  `;
}
export default generateMarkdown;