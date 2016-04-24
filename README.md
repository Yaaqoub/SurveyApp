Survey App
==========
A simple survey app written in Node.js using an Express based framework, SequelizeJS, and a MySQL database.
-----------------------------------------------------------------------------------------------------------
First clone the repository using 
	git clone https://github.com/steph-w/SumoMeSurveyApp.git

To set up the database, in the config/config.json file replace 

	"development": {
	    "username": "root",
	    "password": null,
	    "database": "database_test",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	}

with the credentials of your MySQL account. 
Next we install all dependencies with a call to 
	npm install
Then start up the server by calling 
	npm start 
and the application should now be running at 
[http://localhost:5000/](http://localhost:5000/)