// todo: why cant we destructure here?
// e.g. import {double} from './util'
import util from './util'

class View {
  constructor(selector, content = 'Hello') {
    this.el = document.querySelector(selector);
    this.content = content;
    this.inc = 0;

    this.attachListeners();
  }

  render() {
    this.el.textContent = `${this.content} was clicked ${this.inc}
                           times (${util.double(this.inc)} points)`
  }

  attachListeners() {
    this.el.addEventListener('click', event => {
                             this.inc = this.inc + 1;
                             this.render();
    });
  }
}

exports.default = View;
