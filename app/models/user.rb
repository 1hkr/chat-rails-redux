class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:author]

  has_many :messages

  validates :author, uniqueness: true

  attr_accessor :email, :password, :password_confirmation, :remember_me, :username
  # attr_accessible :title, :body
end
