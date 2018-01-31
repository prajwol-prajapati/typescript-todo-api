import Session from '../models/session';

export function createSession(userParams: any): {} {
	return new Session({
		user_id: userParams.user.id,
		refresh_token: userParams.tokens.refreshToken,
		email: userParams.user.email
	})
		.save()
		.then(Session => Session.refresh());
	
}

export function deleteSession(id: number) {
	return new Session({ user_id: id })
	.fetch()
	.then(session => session.destroy());
}