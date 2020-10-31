const { app, fs, con } = require('../../server');

app.get('/api/users/getUsers', function (req, res) {
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
		console.log(data);
		res.end(data); // you can also use res.send()
	});
});

//The addUser endpoint
app.post('/api/users/addUser', function (req, res) {
	//Step 2: read existing users
	const { firstname, lastname, email } = req.body;
	console.log('Post triggered');

	con.connect(function (err) {
		if (err) throw err;
		console.log('Connected!');
		var sql = `INSERT INTO users (firstname, lastname, email) VALUES ("${firstname}", "${lastname}", "${email}")`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log('1 record inserted');
			res.send(result);
		});
	});
});
