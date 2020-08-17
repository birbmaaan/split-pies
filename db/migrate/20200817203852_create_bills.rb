class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.string :description, null: false
      t.string :category, null: false
      t.integer :amount, null: false
      t.string :split, null: false
      t.integer :author_id, null: false
      t.integer :pay_partner_id, null: false
      t.timestamps
    end
    add_index :bills, :author_id
    add_index :bills, :pay_partner_id
  end
end
