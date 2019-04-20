# FriendFinder

### Welcome to Friend finder!!! 

FriendFinder is a great web application to find like-minded friends. 

Simply click the survey button to answer checkin questions. Our algorithm will help you find the best friend suggestion. 

## technology 

FriendFinder uses Express, node.js, jquerry, html, and Bootstrap. 

#### front-end 

A user fill in a form and Ajax call to POST user input to our database is made. 

#### back-end 

The application stores user input in an object that is pushed in an array of objects already existing in our database. 

The application calculates the total scores from the user and compare the results with other users's data in the database to suggest a friend. 

The application suggests a best match where the difference between the user score and that of each element in the database is smaller. 
