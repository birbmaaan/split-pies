export const allBills = () => (
  $.ajax({
    url: `/api/bills`,
    method: 'GET'
  })
)

export const createBill = bill => (
  $.ajax({
    url: `/api/bills`,
    method: 'POST',
    data: {bill}
  })
)

export const updateBill = bill => (
  $.ajax({
    url: `/api/bills/${bill.id}`,
    method: 'PATCH',
    data: {bill}
  })
)

export const findBill = billId => (
  $.ajax({
    url: `/api/bills/${billId}`,
    method: 'GET',
    data: {billId}
  })
)

export const deleteBill = billId => (
  $.ajax({
    url: `/api/bills/${billId}`,
    method: 'DELETE',
    data: {billId}
  })
)