# Write your MySQL query statement below
SELECT MAX(num) as num FROM mynumbers
WHERE num = (
    SELECT num FROM mynumbers
    GROUP BY num
    HAVING COUNT(*) = 1
    ORDER BY num DESC
    LIMIT 1
)