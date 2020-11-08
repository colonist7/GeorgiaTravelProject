//@ts-ignore
let con = require('../../server');

//@ts-ignore
exports.getContacts = (callback: (result: IContact) => void): void => {
	con.query('SELECT * FROM contact', function (err: Error, result: IContact) {
		if (err) throw err;
		return callback(result);
	});
};
