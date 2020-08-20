class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :registered, :boolean
    remove_index :users, :username
    rename_column :users, :username, :name
    change_column_default :users, :registered, true
    change_column_default :users, :name, "FirstName"
  end
end
