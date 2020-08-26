export const allComments = () => (
  $.ajax({
    url: `/api/bills`,
    method: 'GET'
  })
)

export const findComment = (commentId) => (
  $.ajax({
    url: `/api/bills`,
    method: 'GET',
    data: commentId
  })
)

export const createComment = (comment) => (
  $.ajax({
    url: `/api/bills`,
    method: 'GET',
    data: {comment}
  })
)

export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/bills`,
    method: 'GET',
    data: { commentId }
  })
)