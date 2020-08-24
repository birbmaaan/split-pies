class AddBillUsersArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :split
    add_column :bills, :split_equally, :boolean, null: false
    rename_column :bills, :author_id, :partner_one
    rename_column :bills, :pay_partner_id, :partner_two
    add_column :bills, :partner_one_paid_share, :string, null: false
    add_column :bills, :partner_one_owed_share, :string, null: false
    add_column :bills, :partner_two_paid_share, :string, null: false
    add_column :bills, :partner_two_owed_share, :string, null: false

  end
end