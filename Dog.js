var chalk = require('chalk');
function Dog(){
    this.stomach = [];
}

Dog.prototype.sayHi = function(){
    console.log('Hi, I am a dog. My name is: ' + chalk.require())
}

module.exports = Dog;