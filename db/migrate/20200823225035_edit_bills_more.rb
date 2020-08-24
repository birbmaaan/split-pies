class EditBillsMore < ActiveRecord::Migration[5.2]
  def change
    rename_column :bills, :partner_one, :partner_one_id
    rename_column :bills, :partner_two, :partner_two_id
    add_column :bills, :paid_up, :boolean, presence: true, null: false
  end
end
