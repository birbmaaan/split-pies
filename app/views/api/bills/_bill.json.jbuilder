one_paid = bill.partner_one_paid_share
one_owed = bill.partner_one_owed_share
two_paid = bill.partner_two_paid_share
two_owed = bill.partner_two_owed_share

one_net = one_paid.to_f - one_owed.to_f
two_net = two_paid.to_f - two_owed.to_f

created_at = bill.created_at.to_date
updated_at = bill.updated_at.to_date

partner_one = {
  userId: bill.partner_one_id,
  paidShare: one_paid,
  owedShare: one_owed,
  netBalance: one_net.to_s
}

partner_two = {
  userId: bill.partner_two_id,
  paidShare: two_paid,
  owedShare: two_owed,
  netBalance: two_net.to_s
}

users = [partner_one, partner_two]

json.set! bill.id do
  json.id bill.id
  json.description bill.description 
  json.paidUp bill.paid_up 
  json.amount bill.amount 
  json.category bill.category 
  json.createdAt created_at
  json.createdBy bill.partner_one_id 
  json.updatedAt updated_at
  json.partners users
end