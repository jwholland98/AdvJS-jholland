const readline = require('readline');
const assert = require('assert').strict;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answer(str, noises){//remove noises from str
    let count=0;
    for(i=0;i<noises.length;i++){
       for(j=0; j<str.length; j++){
            if(str[j] === noises[i]){
                str.splice(j, 1);
                j-=1;
            }
        }
    }
    str = str.join(' ');
    return str;
}

function test(){
    assert.strictEqual(answer(["wa", "yay", "wa", "what", "wa"], ["yay", "what"]), "wa wa wa");
    assert.strictEqual(answer(["wa", "yay", "yay", "yay", "wa", "what", "what", "what", "wa"], ["yay", "what"]), "wa wa wa");
    assert.strictEqual(answer(["wa", "yay", "aw", "yay", "yay", "wa", "what", "what", "what", "wa", "pow", "pow"], ["yay", "what"]), "wa aw wa wa pow pow");
    console.log("all test cases passed");
    rl.close();
}

function solve() {
    let lineCount = 1;
    let str = [];
    let noises = [];
    let caseNum = 0;
    rl.on('line', (line) => {
        if(lineCount == 1){
            caseNum=line;
            lineCount+=1;
        }
        else if (lineCount == 2){
            str = line.split(' ');
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