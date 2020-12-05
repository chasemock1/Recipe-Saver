class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true, uniqueness: true 
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 8}


    has_many :recipes
    has_many :favorites
end
