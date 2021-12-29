function computerPlay(){
    let rps_array = ['rock','paper','scissors'];
    let random_rps = Math.floor(Math.random()*3);
    return rps_array[random_rps];
}

console.log(computerPlay());