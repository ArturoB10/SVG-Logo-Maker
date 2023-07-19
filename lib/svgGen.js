const { writeFile } = require('fs');
const { Triangle, Square, Circle } = require('./shapes');

const genSvg = ({shape,text,textColor,shapeColor}) => {
    
    const logo = 
        shape == 'Triangle' ? 
            new Triangle(text,textColor,shapeColor) :
        shape == 'Square' ?
            new Square(text,textColor,shapeColor) :
            new Circle(text,textColor,shapeColor);

    writeFile('./dist/logo.html', logo.svg(), err => {
        if(err) throw err;
        console.log('Logo created in dist folder!!!!');
    })
}



module.exports = genSvg;