let users = [
    { name: 'A', email: 'a1@example.com' },
    { name: 'B', email: 'b2@example.com' },
    { name: 'C', email: 'c3@example.com' }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            break;
        }
    }
}

updateEmail('B', 'b.new@example.com');
console.log(users);
