const fs = require('fs');
const execSync = require('child_process').execSync;

fs.readFile('passwords.json', (err, data) => {
    if (err) throw err;

    const db = JSON.parse(data.toString());
    db.items.forEach(e => {
        execSync('pass insert -m ' + e.name.toString().replace(' ', '').replace(/\W/g, ''), {encoding: 'utf-8', input: e.login.password + '\n' + e.login.username + '\n'});
    });

});
