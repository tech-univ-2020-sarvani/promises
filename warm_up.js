function timeout(){
    setTimeout(function(){
        console.log('TIMED OUT!');
    }, 0);
}
module.exports = timeout;