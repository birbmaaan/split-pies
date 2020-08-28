# SplitPies

#### A simple Splitwise clone for friends to split costs between friends.

Gone to lunch and your friend forgot their wallet? No problem with SplitPies! Simply record payments between friends and let SplitPies do the work of keeping track of who owes who what. Ask your friends if SplitPies is right for you. If you want to track complicated transactions including details like interest or unequal splits, it may be better to look to a more full-featured app like SplitPies's inspiration, Splitwise.

[SplitPies Live](https://split-pies.herokuapp.com/#/)

# Development 

### 1. Transactions

Users can record a bill split between themselves and another user, choosing who made the initial payment. The bill is recorded for both users, and a running balance is calculated and displayed. A user can view transactions and balances between another user, as well as between all their transactions and friends. Bills can also be deleted and can only be viewed by those involved.

One of the bigger challenges of this feature was deciding which information to store in the database, which would in turn determine how to calculate the data to be displayed to and input by the user. I used jBuilder to format the returned data from my backend api calls, which allowed my bill form containers to populate with the appropriate friends and bills. 

```
_bill.json.jbuilder

json.id bill.id
json.description bill.description 
json.paidUp bill.paid_up 
json.amount bill.amount 
json.category bill.category 
json.createdAt created_at
json.createdBy bill.author_id
json.updatedAt updated_at
json.partners users

```

Building the new bill and edit bill form involved a lot of finessing. This required implementing a modal slice of state to determine which form to render. 

``` 
modal.jsx

 let component;
  switch (modal.formName) {
    case 'newBill':
      component = <NewBillContainer />;
      break;
    case 'editBill':
      component = <EditBillContainer billId={modal.objectId}/>;
      break;
    case 'addFriend':
      component = <FriendForm />
      break;
    case 'settleUp':
      component = <SettleUpForm />
      break;
    case 'feedback':
      component = <Feedback />
      break;
    default:
      return null;
  }
```

Through careful application of selectors and state, I was able to keep the form's current state updated with all the information needed to successfully create a new bill. 

![](https://raw.githubusercontent.com/birbmaaan/split-pies/master/app/assets/images/readme1.png)
![](https://raw.githubusercontent.com/birbmaaan/split-pies/master/app/assets/images/readme2.png)

```
bill_form.jsx

 <select className='selector' value={this.state.partner_one_id} onChange={this.handleSwitch()}>
   <option defaultValue={this.props.userId}>you</option>
   <option value={this.state.friend.id}>{this.state.friend.name}</option>
 </select>
```

As I built out the user dashboard, which contains an index of all bills and bills between another user, I ran into a lot of issues as my components started to lock up and become dependent on each other. To solve this, I spent a lot of time refactoring various pieces of information into individual components. Not only did this make things run more smoothly, but it also made the code much more intuitive and understandable. 

```
bill_dash.jsx

    return (
      <div className='dash-content-container'> 
        <section className="main-content-center">
          <DashHeader 
            name={"All expenses"}
            registered={true}
            />
          <BillIndexContainer />
        </section>
        <RightColumn />
      </div>
    )
```

### 2. Friending

When not logged in, visitors to SplitPies are only able to access the main splash page, as well as the login and sign up pages. Once logged in, users have access to all their information, including transaction history, total balances, and friends. 

Allowing users to add friends involved creating a table with two user_ids, as well as a column to determine whether or not the request was pending. For the sake of allowing users to record bills with friends who were not already members, a pending request translated to an unregistered user. Adding an unregistered friend creates an actual user account with a registered column set to false. This allows transactions to be recorded and linked to the relevant users in the database. For this to actually work smoothly, it will also require an ability for users to reset their password, as well as friend requesting to actually send an email.

Having a friend association also allows for users to view bill totals between them and a friend.

![](https://raw.githubusercontent.com/birbmaaan/split-pies/master/app/assets/images/readme5.png)


# Features

### Current features

1. User auth - most parts of website inaccessible until after a user has logged in.
2. Friending - users can add friends through email, including those not currently registered.
3. Bills - users can add new bills between friends and track running balances.
4. Comments - Users can comment on transactions.

### Future features

1. Create groups and split bills between more than two people
2. Change how the bill is split (current default is a 50/50 even split) 
3. Close out transactions and view past bills
4. Change user settings, such as name, email, and password

