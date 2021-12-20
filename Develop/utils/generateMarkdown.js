// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) { return '' }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
  ${data.description}
  
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## License

  ${renderLicenseSection(data.license)}

## Badges



## Contributing

  The contributer to this project are:
    ${data.contributing}

## Tests

  ${data.tests}

## Questions

  If you have any questions or need information, contact me at
  ${data.email}
  or
  follow me at 
  ${data.github}

`;
}

module.exports = generateMarkdown;
