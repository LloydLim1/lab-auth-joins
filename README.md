based on the activity. each join serves a purpose which INNER JOIN returns only the users having at least one role assigned to them and does not include users without roles. 
LEFT JOIN returns all users and adds their profile fields if present, making profile fields NULL when missing. RIGHT JOIN displays all roles, even if there is no user assigned 
to them, in which case the details of the user are NULL. The FULL OUTER JOIN (approximated by a LEFT JOIN and RIGHT JOIN union in MySQL) has all users and profiles, ensuring no 
information is excluded, whether a user does not have a profile or a profile does not have a user. The CROSS JOIN creates every possible combination of users and roles, 
handy for situations where an entire combination is desired. The SELF JOIN connects a user to those whom they referred, displaying both the referrer and referred user in the same row. 
Finally, the Bonus query employs a subquery with a LEFT JOIN to list every user with their most recent login data, merging account information with the most up-to-date activity.


GET /api/reports/users-with-profiles  - If we have an entire report about users and their profiles, the following call will run a query to retrieve all existing users. With regard to those whose profile information exists, it will show a left join. Reason: verify which users have profile data and which do not.

GET /api/reports/roles-right-join - It will take a RIGHT JOIN to produce a report containing all of the roles such as those that have not yet been assigned to any user. Reason: Ensure that all roles are well listed, including the ones that are unused ones.

GET /api/reports/profiles-full-outer - Uses a simulated FULL OUTER JOIN to grant users and profiles some fusion. Objective - presenting users without profiles and profiles without users in a single report.

GET /api/reports/user-role-combos - This performs a CROSS JOIN between roles and users. It will show all the possible combinations of users with roles that can easily be used later for testing or assignment.

GET /api/reports/referrals - This does a SELF JOIN (through the referrals table) to show who referred whom. Purpose: Monitor referral relationships among users.

GET /api/reports/latest-login - It will fetch all the last logins of users by subquery + LEFT JOIN. The common objective is to know the last login behaviour of all users.
