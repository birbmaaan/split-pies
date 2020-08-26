class EditBillsAddAuthor < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :author_id, :integer, null: false
  end
end
