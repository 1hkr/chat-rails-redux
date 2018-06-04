class AddAuthorToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :author, :string
  end
end
