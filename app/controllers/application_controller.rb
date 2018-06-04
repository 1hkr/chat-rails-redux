class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, :set_user

  private

  def set_user
    current_user ? cookies[:username] = current_user.author : cookies[:username] = 'guest'
  end

end
