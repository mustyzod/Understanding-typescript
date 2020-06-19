enum Role { ADMIN,READ_ONLY,AUTHOR};

const person/*: {
  name: string;
  age: number;
  hobbies:string[];
  role:[number,string];
} */= {
  name: "Sodruldeen",
  age: 30,
  hobbies: ['sport', 'cooking'],
  // role:[2,'author']
  role: Role.ADMIN
};

//  Array of strings
let favouriteActivities: string[];
favouriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
