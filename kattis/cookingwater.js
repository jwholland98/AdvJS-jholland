const readline = require('readline');
const assert = require('assert').strict;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answer(time){
    for(let i=0;i<time.length;i++){
        let flag=false;
        for(let k=time[i][0];k<=parseInt(time[i][1]);k++){
            for(let j=0;j<time.length;j++){
                if(!(k>=parseInt(time[j][0]) && k<=parseInt(time[j][1])))
                    flag=true;
                if(flag)
                    break;
            }
            if(!flag)
                return "gunilla has a point";
        }
    }
    return "edward is right";
}

function test(){
    assert.strictEqual(answer([[4, 6], [2, 4], [0, 4]]), "gunilla has a point", "first one");
    assert.strictEqual(answer([[4, 6], [2, 4], [0, 2]]), "edward is right", "second one");
    assert.strictEqual(answer([1, 7], [8, 10]), "edward is right", "third one");
    console.log("all test cases passed");
    rl.close();
}

function solve() {
    let lineCount = 1;
    let d = 0;
    time = [];
    rl.on('line', (line) => {
        if(lineCount == 1){
            d=line;
            lineCount+=1;
        }
        else{
            if(d>1){
                time.push(line.split(' '));
                d-=1;
            }
            else{
                time.push(line.split(' '))
                console.log(answer(time));
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