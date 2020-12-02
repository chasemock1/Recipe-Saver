# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
User.destroy_all


@admin = User.create!(username: 'admin', email: 'admin@gmail.com', password: '123456789')

@recipe1 = Recipe.create!(name: 'dressing', description: 'This is a test', ingredients: 'look in a cookbook', steps: 'I do not know the steps', user: @admin)
