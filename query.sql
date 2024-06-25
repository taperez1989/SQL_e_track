SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM role
JOIN department ON role.department_id = department.id;



SELECT * FROM role 
JOIN employee ON employee.role_id = role.id

JOIN department ON role.department_id = department.id