const readline = require('readline');
const assert = require('assert').strict;

function answer(){

}

function test(){

}

function solve() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (line) => {
        
    })
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test()
    else
        solve();
}