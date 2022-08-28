var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse= new Mouse();


try{
    cat.eat(mouse);
}catch(error){
    console.log('error')
}
