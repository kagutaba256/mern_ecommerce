import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mike Smith',
    email: 'mikesmith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Donny Boy',
    email: 'donny@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Swag Master',
    email: 'swagmaster@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
