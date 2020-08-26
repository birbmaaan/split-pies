date = comment.created_at.to_date

json.extract! comment, :id, :author_id, :bill_id, :content
json.createdAt date