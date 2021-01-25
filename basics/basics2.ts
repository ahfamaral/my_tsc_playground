type PersonType = {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
}

const person: PersonType = {
	name: 'Andre',
	age: 30,
	hobbies: ['Yoga', 'Cooking', 'Cycling'],
	role: [2, 'author']
}

console.log(person.name)

person.role.push('admin')
person.role[0] = 10

person.role = [0, 'admin']
// person.role = [0, 'admin', 'role']


for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
} = {
	name: 'Andre',
	age: 30,
	hobbies: ['Yoga', 'Cooking', 'Cycling'],
	role: Role.ADMIN
}

console.log('person2.role', person2.role)