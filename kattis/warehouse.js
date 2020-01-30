const readline = require('readline');
const assert = require('assert').strict;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answer(){//remove noises from str
    
}

function test(){
    assert.strictEqual(answer(["wa", "yay", "wa", "what", "wa"], ["yay", "what"]), "wa wa wa");
    console.log("all test cases passed");
    rl.close();
}

function solve() {
    let lineCount = 1;
    let str = 0;
    let noises = [];
    let caseNum = 0;
    rl.on('line', (line) => {
        if(lineCount == 1){
            caseNum=line;
            lineCount+=1;
        }
        else if (lineCount == 2){
            num = line;
            lineCount += 1;
        }
        else{
            let inp = line.split(' ');
            if(inp[0] != "what")
                noises.push(inp[2]);
            else{
                console.log(answer(str, noises));
                if(caseNum > 1){
                    caseNum-=1;
                    lineCount=2;
                    str=[];
                    noises=[]
                }
                else
                    rl.close();
            }
        }
    })
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test()
    else
        solve();
}