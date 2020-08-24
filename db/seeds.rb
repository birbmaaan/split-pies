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
  partner_one_id: 1,
  partner_two_id: 2,
  split_equally: true,
  partner_one_paid_share: 400,
  partner_one_owed_share: 200,
  partner_two_paid_share: 0,
  partner_two_owed_share: 0,
  paid_up: false 
)

Bill.create(
  description: "Sandwich", 
  category: "groceries", 
  amount: 1000, 
  partner_one_id: 1,
  partner_two_id: 4,
  split_equally: false,
  partner_one_paid_share: 1000,
  partner_one_owed_share: 1000,
  partner_two_paid_share: 0,
  partner_two_owed_share: 0,
  paid_up: false 
)

Bill.create(
  description: "Drink", 
  category: "groceries", 
  amount: 1499, 
  partner_one_id: 1,
  partner_two_id: 3,
  split_equally: true,
  partner_one_paid_share: 1499,
  partner_one_owed_share: 749,
  partner_two_paid_share: 750,
  partner_two_owed_share: 0,
  paid_up: true
)
