const readline = require('readline');
const assert = require('assert').strict;

function answer(str, noises){//remove noises from str
    return str[0];//just a test to make sure it is working so far
}

function test(){

}

function solve() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let n = 0;
    rl.on('line', (line) => {
        n = line.split(' ');
        rl.close();
    })

    for(i=0;i<n;i+=0){
        let lineCount = 1;
        let str = [];
        let noises = [];
        rl.on('line', (line) => {
            if (lineCount == 1){
                str = line.split(' ');
                lineCount += 1;
            }
            else{
                //get remaining input and then call answer
                let inp = line.split(' ');
                if(inp[0] != "what")
                    noises.push(inp[2]);
                else{
                    console.log(answer(str, noises));
                    rl.close();
                }
            }
        })
    }
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test()
    else
        solve();
}