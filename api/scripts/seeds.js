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
    "image": "https://picsum.photos/200",
    "home": null
  }, {
    "userName": "Sergio",
    "userAlias": "kami",
    "email": "example@example.com",
    "password": "12345678",
    "image": "https://picsum.photos/200",
    "home": null
  }, {
    "userName": "Paloma",
    "userAlias": "vickie",
    "email": "paloma.gladine@gmail.com",
    "password": "12345678",
    "image": "https://picsum.photos/200",
    "home": null
  }, {
    "userName": "Intruso1",
    "userAlias": "malignorrrrr",
    "email": "example3@example.com",
    "password": "12345678",
    "image": "https://picsum.photos/200",
    "home": null
  }, {
    "userName": "Intruso2",
    "userAlias": "malignorrrrr",
    "email": "example4@example.com",
    "password": "12345678",
    "image": "https://picsum.photos/200",
    "home": null
  }, {
    "userName": "David",
    "userAlias": "deivid",
    "email": "deivid@example.com",
    "password": "12345678",
    "image": "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
  }, {
    "userName": "Bemol",
    "userAlias": "pesadito",
    "email": "bemol@example.com",
    "password": "12345678",
    "image": "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
  }]

const _products = [{
  "name": "aguacate",
  "location": "supermercado",
  "image": "https://picsum.photos/200",
  "type": "fruta",
  "quantity": "2kg",
  "home": null
}, {
  "name": "naranjas",
  "location": "supermercado",
  "image": "https://picsum.photos/200",
  "type": "fruta",
  "quantity": "2kg",
  "home": null
}, {
  "name": "pollo",
  "location": "supermercado",
  "image": "https://picsum.photos/200",
  "type": "carne",
  "quantity": "2kg",
  "home": null
}, {
  "name": "salmon",
  "location": "supermercado",
  "image": "https://picsum.photos/200",
  "type": "pescado",
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

