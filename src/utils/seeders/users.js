const uuid = require('uuid')
const {faker} = require('@faker-js/faker')
const {hashPassword} = require('../crypto')
const Users = require('../../models/users.models')
for(let i = 0; i < 10; i++){
    Users.create({
            id: uuid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashPassword('celsius'),
            gender:faker.name.gender(faker.name.firstName()),
            phone: faker.phone.number(),
            birthday: faker.date.birthdate(),
            country:faker.address.country(),
            role:faker.helpers.arrayElement(["normal", "admin"]),
            is_verified:faker.helpers.arrayElement(["t", "f"])
        }
    )
} 

/* Users.create({
    id:uuid.v4(),
    firstName: 'WILFREDO',
    lastName: 'MACHADDO',
    email: 'wlfredo.machado@hotmail.com',
    password: hashPassword('celsius'),
    role: 'admin',
    phone: '+584129280986',
    birthday: '1971-05-02'
}) */