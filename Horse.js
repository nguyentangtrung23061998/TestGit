
function Horse(){
    this.stomach = [];
}
Horse.prototype.sayHi = function(){
    console.log('Running')
}
module.exports = Horse;