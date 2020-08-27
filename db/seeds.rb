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
  amount: '4.00', 
  author_id: 1,
  partner_one_id: 1,
  partner_two_id: 2,
  split_equally: true,
  partner_one_paid_share: '4.00',
  partner_one_owed_share: '2.00',
  partner_two_paid_share: '0',
  partner_two_owed_share: '2.0',
  paid_up: false 
)

Bill.create(
  description: "Sandwich", 
  category: "groceries", 
  amount: '10.00', 
  author_id: 1,
  partner_one_id: 4,
  partner_two_id: 1,
  split_equally: false,
  partner_one_paid_share: '10.00',
  partner_one_owed_share: '10',
  partner_two_paid_share: '0',
  partner_two_owed_share: '0',
  paid_up: false 
)

Bill.create(
  description: "Drink", 
  category: "groceries", 
  amount: '14.99',
  author_id: 3, 
  partner_one_id: 1,
  partner_two_id: 3,
  split_equally: true,
  partner_one_paid_share: '14.99',
  partner_one_owed_share: '7.50',
  partner_two_paid_share: '0',
  partner_two_owed_share: '7.49',
  paid_up: true
)

Bill.create(
  description: "the blue pill", 
  category: "general", 
  amount: '54.00', 
  author_id: 5,
  partner_one_id: 5,
  partner_two_id: 1,
  split_equally: true,
  partner_one_paid_share: '54.00',
  partner_one_owed_share: '26.00',
  partner_two_paid_share: '0',
  partner_two_owed_share: '26.0',
  paid_up: false 
)

Bill.create(
  description: "bow and arrows", 
  category: "general", 
  amount: '39.50', 
  author_id: 1,
  partner_one_id: 1,
  partner_two_id: 2,
  split_equally: false,
  partner_one_paid_share: '39.50',
  partner_one_owed_share: '19.75',
  partner_two_paid_share: '0',
  partner_two_owed_share: '19.75',
  paid_up: false 
)

Comment.create(
  content: "Thanks!",
  author_id: 1,
  bill_id: 1,
)

Comment.create(
  content: "No no, thank you.",
  author_id: 2,
  bill_id: 1,
)

Comment.create(
  content: "I loved it",
  author_id: 3,
  bill_id: 3,
)

Comment.create(
  content: "No for real, it was great",
  author_id: 3,
  bill_id: 3,
)

Comment.create(
  content: "Glad you thought so",
  author_id: 1,
  bill_id: 3,
)

Comment.create(
  content: "Bless. I gotchu next time",
  author_id: 1,
  bill_id: 2,
)

Comment.create(
  content: "I gotchu fam",
  author_id: 3,
  bill_id: 2,
)

Comment.create(
  content: "I need you to wake up",
  author_id: 5,
  bill_id: 4,
)