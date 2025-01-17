const user = {
    name: "Veronika",
    age: 18,
    country: "Ukraine"
};

//rest
const {name, ...rest} = user;
console.log(name);
console.log(rest);

//spread
const addUser = {...user, lastName: "Slyvka"};
console.log(addUser);