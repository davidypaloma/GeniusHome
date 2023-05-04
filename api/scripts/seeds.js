require("dotenv").config();
require("../config/db.config");
const Home = require("../models/home.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");
const Message = require("../models/message.model");
const CleaningTask = require("../models/cleaning-task.model");

const _homes = [
  {
    homeName: "Vickie y sus vikingos",
  }
]

const _users = [
  {
    "userName": "Mikel",
    "userAlias": "lechon",
    "email": "example2@example.com",
    "password": "12345678",
    "image": "boy",
    "home": null
  }, {
    "userName": "Sergio",
    "userAlias": "kami",
    "email": "example@example.com",
    "password": "12345678",
    "image": "man",
    "home": null
  }, {
    "userName": "Paloma",
    "userAlias": "vickie",
    "email": "paloma.gladine@gmail.com",
    "password": "12345678",
    "image": "woman",
    "home": null
  }, {
    "userName": "Intruso1",
    "userAlias": "malignorrrrr",
    "email": "example3@example.com",
    "password": "12345678",
    "image": "girl",
    "home": null
  }, {
    "userName": "Intruso2",
    "userAlias": "malignorrrrr",
    "email": "example4@example.com",
    "password": "12345678",
    "image": "girl",
    "home": null
  }, {
    "userName": "David",
    "userAlias": "deivid",
    "email": "deivid@example.com",
    "password": "12345678",
    "image": "man"
  }, {
    "userName": "Bemol",
    "userAlias": "pesadito",
    "email": "bemol@example.com",
    "password": "12345678",
    "image": "boy"
  }]

const _products = [{
  "name": "aguacate",
  "location": "Mercadona",
  "image": "https://picsum.photos/200",
  "type": "Fruit",
  "quantity": "2kg",
  "home": null
}, {
  "name": "naranjas",
  "location": "Mercadona",
  "image": "https://picsum.photos/200",
  "type": "Fruit",
  "quantity": "2kg",
  "home": null
}, {
  "name": "pollo",
  "location": "Mercadona",
  "image": "https://picsum.photos/200",
  "type": "Meat",
  "quantity": "2kg",
  "home": null
}, {
  "name": "salmon",
  "location": "Mercadona",
  "image": "https://picsum.photos/200",
  "type": "Fish",
  "quantity": "2kg",
  "home": null
}]

const _cleaningTasks = [{
  "name": "Hacer cacay sonreir mucho",
  "image": "https://picsum.photos/200",
  "assignedUser": null,
  "home": null
}, {
  "name": "Tender",
  "image": "https://picsum.photos/200",
  "assignedUser": null,
  "home": null
}, {
  "name": "Hacer menús",
  "image": "https://picsum.photos/200",
  "assignedUser": null,
  "home": null
}]

const _messages = [{
  "text": "Tttttatu",
  "urgent": false,
  "image": "https://picsum.photos/200",
  "home": null,
  "owner": null
}, {
  "text": "Correcto",
  "urgent": false,
  "image": "https://picsum.photos/200",
  "home": null,
  "owner": null
}, {
  "text": "CALLA",
  "urgent": false,
  "image": "https://picsum.photos/200",
  "home": null,
  "owner": null
}, {
  "text": "fistro de la pradera",
  "urgent": false,
  "image": "https://picsum.photos/200",
  "home": null,
  "owner": null
}, {
  "text": "fistro de la pradera condemor",
  "urgent": false,
  "image": "https://picsum.photos/200",
  "home": null,
  "owner": null
}, {
  "text": "fistro de la pradera jarrrr",
  "urgent": false,
  "home": null,
  "owner": null
}]

Product.deleteMany()
  .then(() => Message.deleteMany())
  .then(() => CleaningTask.deleteMany())
  .then(() => User.deleteMany())
  .then(() => Home.deleteMany())
  .then(() => Home.create(_homes))
  .then(async (homes) => {
    homes.forEach(async (home) => {
      _users.forEach((user) => {
        user.home = home.id
      })
      const users = await User.create(_users)
      console.log("users created");

      _products.forEach((product) => {
        product.home = home.id
      })
      await Product.create(_products)
      console.log("products created");

      _cleaningTasks.forEach((cleaningTask, index) => {
        cleaningTask.home = home.id
        cleaningTask.assignedUser = users[index].id
      })
      CleaningTask.create(_cleaningTasks)
      console.log("cleaning tasks created")

      _messages.forEach((message, index) => {
        message.home = home.id
        message.owner = users[index].id
      })
      Message.create(_messages)
      console.log("messages created")
    })
  })
  .catch((error) => console.error(`An error has occurred ${error}`))

