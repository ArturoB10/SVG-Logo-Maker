const questions = [
    {
        type:'input',
        name: 'text',
        message:'What three letter would you like on your logo?',
        validate: text => text.length<4 || 'No more than three letters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: "What is the text's color or a hexadecimal number?"
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape of the logo?',
        choices: ['Triangle','Circle','Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What is the shape's color?"

    }
]

module.exports = questions;