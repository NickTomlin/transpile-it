var name = 'foobar';

var [a,b] = [1,2];
var numbers = ['one', 'two', 'three'];

var author = {
  [name]: 'sharon'
};

var args = [0, 1, 2];
printem(...args);

function printem() { console.log(Array.prototype.join.call(arguments, ' '));  }

class View {
  constructor(selector, content = 'Hello') {
    this.el = document.querySelector(selector);
    this.content = content;
    this.inc = 0;

    this.attachListeners();
  }

  render() {
    this.el.textContent = `${this.content} was clicked ${this.inc} times`
  }

  attachListeners() {
    this.el.addEventListener('click', event => {
                             this.inc = this.inc + 1;
                             this.render();
    });
  }
}

var double = (x) => x * x;
console.log(double(4));

var myView = new View('body', 'The Beauty of es6');
myView.render();
