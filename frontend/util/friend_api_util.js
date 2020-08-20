export const allFriends = (userId) => (
  $.ajax({
    url: `/api/friends`,
    method: "GET",
    data: {userId}
  })
)

export const friendRequest = friendInfo => (
  $.ajax({
    url: `/api/friends`,
    method: "POST",
    data: {friendInfo}
  })
)

export const deleteFriend = friendId => (
  $.ajax({
    url: `/api/friends/${friendId}`,
    method: "DELETE"
  })
)