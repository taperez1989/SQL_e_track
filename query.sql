SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM role
JOIN department ON role.department_id = department.id;



SELECT * 
FROM role 
join employee
    on employee.role_id = role.id
join department
    on role.department_id = department.id