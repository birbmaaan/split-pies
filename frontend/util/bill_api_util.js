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

export const calculateSplit = (amount, split = 2) => {
  const dollars = parseFloat(amount)
  if (isNaN(dollars)) return '0.00';
  const splitAmount = dollars / split;
  return splitAmount.toFixed(2).toString();
}

export const calculateTotal = (bills, userId) => {
  let total = 0;
  const that = this;
  bills.forEach((bill) => {
    if (userId === bill.partners[0].userId) {
      total += parseFloat(bill.partners[0].netBalance)
    } else {
      total += parseFloat(bill.partners[1].netBalance)
    }
  })
  if (total === 0) return null;
  return total.toFixed(2).toString();
}

export const calculateTotalOwed = (bills, userId, direction) => {
  
  let total = 0;
  const that = this;
  if (direction === 'lent') {
    bills.forEach((bill) => {
      
      if (userId === bill.partners[0].userId) {
        total += parseFloat(bill.partners[1].owedShare)
      } 
    })
  } else {
    bills.forEach((bill) => {
      
      if (userId === bill.partners[1].userId) {
        total += parseFloat(bill.partners[0].owedShare)
      } 
    })
  }

  return total.toFixed(2).toString();
}

export const ensureDecimal = (amount) => {
  return parseFloat(amount).toFixed(2).toString()
}

export const setPartnerOne = (currentUser, friend, payer) => {
  if (payer) {
    return currentUser.id
  } else {
    return friend.id
  }
}

export const setPartnerTwo = (currentUser, friend, payer) => {
  if (!payer) {
    return friend.id
  } else {
    return currentUser.id
  }
}