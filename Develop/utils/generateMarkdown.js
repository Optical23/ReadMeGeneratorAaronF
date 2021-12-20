// Function that returns a large string with parts of the js object of the user input information
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

  ${data.license}

## Contributing

  The contributer to this project are:
    ${data.contributing}

## Tests

  ${data.tests}

## Questions

  If you have any questions or need information, contact me at
  ${data.email}
  or
  link to my git hub is 
  [${data.github}](https://github.com/${data.github});
  

`;
}

module.exports = generateMarkdown;
