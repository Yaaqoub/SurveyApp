Survey App
==========
A simple survey app written in Node.js using an Express based framework, SequelizeJS, and a MySQL database.
-----------------------------------------------------------------------------------------------------------
First clone the repository using 
	`git clone https://github.com/steph-w/SumoMeSurveyApp.git`

To set up the database, in the config/config.json file replace 

	"development": {
	    "username": "root",
	    "password": null,
	    "database": "database_test",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	}

with the credentials of your MySQL account and the name of your local database. 
Next we install all dependencies with a call to 
	`npm install`.


Next we have to use Sequelize to perform a database migration. In your command line, execute
`sequelize db:migrate`


This should properly configure your local database. Next we can start up the server by calling 
	`npm start`, and the application should now be running at 
[http://localhost:5000/](http://localhost:5000/)

Navigating the Survey App
-------------------------

The first page you are greeted with is the page that presents a question to the user. Once a user answers a question, they will be presented with another randomized question and will not see previously answered questions again. Once a user has answered all the questions, they are presented with a page that indicates that the list of questions has been exhausted. 

The front page will appear as
![first_page](/images/firstpage.png)

