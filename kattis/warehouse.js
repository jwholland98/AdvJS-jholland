const readline = require('readline');
const assert = require('assert').strict;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cmp(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
}

function cmp2(a, b) {
    if (a < b) return +1;
    if (a > b) return -1;
    return 0;
}

function answer(items){
    for(i=0;i<items.length;i++){
        for(j=0;j<items.length;j++){
            if(i!=j && items[i][0]===items[j][0]){
                items[i][1]=parseInt(items[i][1])+parseInt(items[j][1]);
                items.splice(j, 1);
                j-=1;
            }
        }
    }
    items.sort(function(a, b) { 
        return cmp(a[0],b[0])
    });
    items.sort(function(a, b) { 
        return cmp2(parseInt(a[1]),parseInt(b[1]))
    });
    let str=items.length + '\n';
    for(i=0;i<items.length;i++){
        str+=items[i][0]+' '+items[i][1];
        if(i!=items.length-1)str += '\n';
    }
    return str;
}

function test(){
    assert.strictEqual(answer(["wa", "yay", "wa", "what", "wa"], ["yay", "what"]), "wa wa wa");
    console.log("all test cases passed");
    rl.close();
}

function solve() {
    let lineCount = 1;
    let num = 0;
    let caseNum = 0;
    let items = [];
    rl.on('line', (line) => {
        if(lineCount == 1){
            caseNum=line;
            lineCount+=1;
        }
        else if (lineCount == 2){
            //console.log("grabbing: "+ line);
            num = line;
            lineCount += 1;
        }
        else{
            if(num>1){
                //console.log("adding: " + line);
                num-=1;
                items.push(line.split(' '));
            }
            else{
                items.push(line.split(' '));
                console.log(answer(items));
                if(caseNum > 1){
                    caseNum-=1;
                    lineCount=2;
                    num=0;
                    items=[];
                }
                else
                    rl.close();
            }
        }
    })
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test();
    else
        solve();
}