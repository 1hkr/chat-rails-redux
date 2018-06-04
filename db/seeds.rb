# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.destroy_all
p 'Messages destroyed'
User.destroy_all
p 'Users destroyed'
Channel.destroy_all
p 'Channels destroyed'

p 'Creating channels'
  channels = Channel.create([{
    name: "Main"
  },
  {
    name: "Berlin"
  },
  {
    name: "Lolex"
  }])

  p 'Creating users'
  users = User.create([{
    email: "alex@douceur.com",
    author: "Alex",
    password: "douceur"
  },
  {
    email: "lolo@douceur.com",
    author: "Lorène",
    password: "douceur"
  }])
  p users

  p 'Creating messages'
  messages = Message.create([{
    user_id: User.find_by_email("alex@douceur.com").id,
    channel_id: Channel.find_by_name("Main").id,
    content: "Hey poulette!"
  },
  {
    user_id: User.find_by_email("lolo@douceur.com").id,
    channel_id: Channel.find_by_name("Main").id,
    content: "Yow"
  }])
  p messages
