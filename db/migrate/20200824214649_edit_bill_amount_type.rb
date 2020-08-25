class EditBillAmountType < ActiveRecord::Migration[5.2]
  def change
    change_column :bills, :amount, :string
  end
end
