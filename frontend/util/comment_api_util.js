export const allComments = () => {
  return (
  $.ajax({
    url: `/api/comments`,
    method: 'GET'
  })
)
}

export const findComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'GET',
  })
)

export const createComment = (comment) => (
  $.ajax({
    url: `/api/comments`,
    method: 'POST',
    data: {comment}
  })
)

export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE',
    data: commentId
  })
)