export interface UserInformation {
	email?: string;
	firstmame?: string;
	lastname?: string;
	phone?: string;
	id?: number;
}

export interface LoginData {
	email: string;
	password: string;
}

export interface RegisterData {
	email: string;
	firstname: string;
	lastname: string;
	password: string;
}
