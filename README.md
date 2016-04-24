Survey App
==========
### A simple survey app written in Node.js using an Express based framework, SequelizeJS, and a MySQL database.
#### A live version of this web app is hosted on Heroku and can be accessed at [Survey App](https://secret-woodland-69976.herokuapp.com/).
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

Using the Survey App
====================
You might first want to populate the survey with questions. To do so, go to the [Administrator Dashboard](https://github.com/steph-w/SumoMeSurveyApp#administrator-dashboard) to add some interesting things you want to ask people.

Survey Page
-----------
The first page you are greeted with is the page that presents a question to the user. Once a user answers a question, they will be presented with another randomized question and will not see previously answered questions again. Once a user has answered all the questions, they are presented with a page that indicates that the list of questions has been exhausted. 

The front page will appear as
![first_page](/images/firstpage.png)

Administrator Dashboard
-----------------------
To access the administrator section of the application, click on the **Admin** button at the top right corner of the page. This will take you to the login, in which the default username is **admin** and the default password is **1234**.

![login](/images/login.png)

Next you will be taken to the administrator dashboard where you can enter a new question and edit or delete previous survey questions. You might want to populate the question survey 

![dashboard](/images/dashboard.png)

Clicking on **Edit** will take you to a page where you can edit the specified question.

![edit](/images/edit.png)

Clicking on **Results** will take you to the results page where you can see how many votes each choice has garnered. 

![results](/images/results.png)

This app is written using the [Bootstrap](http://getbootstrap.com/) framework, so naturally the UI is mobile friendly.
Using Bootstrap, the web app will automatically be resized to scale to fit on your phone screens

And that's about it, happy surveying!
-------------------------------------
