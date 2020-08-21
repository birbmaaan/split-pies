export const allFriends = (userId) => (
  $.ajax({
    url: `/api/friends`,
    method: "GET",
    data: {userId}
  })
)

export const allFriendUsers = () => {
  return(
    $.ajax({
    url: `/api/users`,
    method: 'GET',
  }))
}

export const friendRequest = friendInfo => {
  return (
  $.ajax({
    url: `/api/friends`,
    method: "POST",
    data: {friendInfo}
  })
  )
}

export const deleteFriend = friendId => {
  return (
  $.ajax({
    url: `/api/friends/${friendId}`,
    method: "DELETE",
    data: {friendId}
  })
  )
}

export const findFriend = friendId => (
  $.ajax({
    url: `/api/users/${friendId}`,
    method: 'GET'
  })
)

export const findFriendAssoc = friendId => (
  $.ajax({
    url: `/api/friends/${friendId}`,
    method: 'GET'
  })
)