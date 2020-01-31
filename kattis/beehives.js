const readline = require('readline');
const assert = require('assert').strict;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answer(cor, d){
    let sour = 0;
    for(i=0;i<cor.length;i++){
        for(j=0;j<cor.length;j++){
            if(i!=j && Math.sqrt(Math.pow(cor[i][0]-cor[j][0], 2) + Math.pow(cor[i][1]-cor[j][1], 2))<d){//might need parseInt
                sour+=1;
                break;
            }
        }
    }
    let sweet = cor.length-sour;
    return sour + " sour, " + sweet + " sweet";
}

function test(){
    assert.strictEqual(answer([[0.0, 0.0], [0.0, 3.2], [0.0, -3.2]], 3.1), "0 sour, 3 sweet");
    assert.strictEqual(answer([[0.0, 0.0], [3.2, 0.0], [0.0, -3.0]], 3.1), "2 sour, 1 sweet");
    assert.strictEqual(answer([[0.0, 0.0], [0.0, 1.0], [-1.0, 1.0]], 3.1), "3 sour, 0 sweet");
    console.log("all test cases passed");
    rl.close();
}

function solve() {
    let lineCount = 1;
    let d = 0.0;
    let N = 0;
    cor = [];
    rl.on('line', (line) => {
        if(lineCount == 1){
            inp = line.split(' ');
            d=inp[0];
            N=inp[1];
            lineCount+=1;
        }
        else{
            if(N>0){
                cor.push(line.split(' '));
                N-=1;
            }
            else{
                console.log(answer(cor, d));
                inp = line.split(' ');
                d=inp[0];
                N=inp[1];
                cor=[];
                if(d=="0.0" && N=="0"){
                    rl.close();
                }
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