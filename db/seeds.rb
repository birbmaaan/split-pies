# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Guest', email: 'guest@demo.com', password: 'password', registered: true)
User.create(name: 'Lara Croft', email: 'LCroft@gmail.com', password: 'password', registered: true)
User.create(name: 'Aladdin', email: 'streetrat@gmail.com', password: 'password', registered: true)
User.create(name: 'Ash Ketchum', email: 'catchemall@gmail.com', password: 'password', registered: true)
User.create(name: 'Neo', email: 'mranderson@gmail.com', password: 'password', registered: true)
User.create(name: 'Arya Stark', email: 'aryastark@gmail.com', password: 'password', registered: true)

Friend.create(user_id: 1, friend_id: 2, pending: false)
Friend.create(user_id: 1, friend_id: 3, pending: false)
Friend.create(user_id: 1, friend_id: 4, pending: false)
Friend.create(user_id: 1, friend_id: 5, pending: false)
Friend.create(user_id: 1, friend_id: 6, pending: false)
Friend.create(user_id: 2, friend_id: 1, pending: false)
Friend.create(user_id: 3, friend_id: 1, pending: false)
Friend.create(user_id: 4, friend_id: 1, pending: false)
Friend.create(user_id: 5, friend_id: 1, pending: false)
Friend.create(user_id: 6, friend_id: 1, pending: false)

Bill.create(
  description: "Food", 
  category: "groceries", 
  amount: 400, 
  split: "1, 1",
  author_id: 1,
  pay_partner_id: 2,  
)

Bill.create(
  description: "Drink", 
  category: "groceries", 
  amount: 1499, 
  split: "1, 1",
  author_id: 1,
  pay_partner_id: 3,  
)

Bill.create(
  description: "Sandwich", 
  category: "groceries", 
  amount: 1000, 
  split: "0, 1",
  author_id: 1,
  pay_partner_id: 4,  
)
