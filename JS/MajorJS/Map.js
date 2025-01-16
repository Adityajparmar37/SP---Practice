const arr = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'd', 'd', 'a', 'c', 'e', 'd', 'b']

const freq = new Map();

for (let i of arr) {
    if (freq[i]) {
        freq[i]++;
    } else {
        freq[i] = 1;
    }
}

console.log(freq);