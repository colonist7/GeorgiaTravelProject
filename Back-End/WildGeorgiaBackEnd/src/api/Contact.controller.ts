//@ts-ignore
import { Response } from 'express';

//@ts-ignore
let ContactService = require('../services/Contact/ContactService');
//@ts-ignore
let app = require('../app');
//@ts-ignore

app.get('/api/contacts', function (req: any, res: Response) {
	ContactService.getContacts((result: IContact) => {
		res.json(result);
	});
});
