type Verify = (user: User, sendUser: User) => boolean;
type User = {name: string, password: string}

const verifique: Verify = (user, sendUser) => {
return (user.name === sendUser.name && user.password === sendUser.password)

}

const one = {name: 'carlos', password: '123456'}
const two = {name: 'carlos', password: '123456'}

console.log(verifique(one, two))