const arr = [1, 2, 3, 4]
const [first, ...rest] = arr;
console.log(first);
console.log(rest);

const arr1 = ['a', 'b', 'c', 'd']
const arr2 = [1, 2, 3, 4, 5, 6]
//merging two arr
const arr3 = [...arr1,...arr2]
console.log(arr3)

const arr4 = [1, 1]
const [a, b = 2,c=3] = arr4;
console.log(a,b,c)


const obj = {
    name: "Aditya Parmar",
    age: 21,
    company:"SocialPilot"
}

const { name:FullName, age,company,role } = obj;
console.log(FullName," ",age," ",company," ",role);