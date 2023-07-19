class SVG {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  getText = () => this.text;
  getTextColor = () => this.textColor;
  getShapeColor = () => this.shapeColor;
}

class Triangle extends SVG {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  svg = () => (
    `<svg
      version="1.1"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,250 250,250 150,50"
        style="fill:${this.getShapeColor()};stroke:purple;stroke-width:1"
      />
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill=${this.getTextColor()}
      >
        ${this.getText()}
      </text>
    </svg>`
  );
}

class Square extends SVG {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  svg = () => (
    `<svg
      version="1.1"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,50 50,250 250,250 250,50"
        style="fill:${this.getShapeColor()};stroke:purple;stroke-width:1"
      />
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill=${this.getTextColor()}
      >
        ${this.getText()}
      </text>
    </svg>`
  );
}

class Circle extends SVG {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  svg = () => (
    `<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="100" r="80" fill=${this.getShapeColor()} />
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill=${this.getTextColor()}
      >
        ${this.getText()}
      </text>
    </svg>`
  );
}

module.exports = { Triangle, Square, Circle };
