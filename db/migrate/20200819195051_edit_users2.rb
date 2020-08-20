class EditUsers2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :registered, false
  end
end
