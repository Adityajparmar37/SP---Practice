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


const user = new Map();
user.set('id', 1)
user.set('name', 'krupal')
user.set('name', 'Aditya')
user.set('role', 'Developer')

console.log(user.get('name'));

user.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})

if (user.has('name')) {
    user.delete('name')
}

if (user.has('role')) {
    console.log(user.get('role'))
}

console.log(user.size); //2

console.log(user)