# Info-Buzz

Welcome to the InfoBuzz web application which is developed by using React + Vite. 
InfoBuzz is focused on retrieving the news for most popular articles from The New York Times like Trending, world, Sports etc.
In order to run this application please follow below steps.


Application Run command:

	* First we have to run "npm install" command to install all node modules dependencies.
	* In the project we have "env.js" file located @ '/project/src/utils/env' path where we need to do the changes of key in order to get the news.
	* Open the Terminal Run "npm run dev" command in the terminal to run the build.
	* After the build is running we have to copy the url from Terminal like 'localhost:5173/' and run it on your browser.


Unit Test cases run command:

	ViTest(Jest): We have used Jest to write our unit test cases which are available in the root folder with 'test' folder.
		* In order to run unit test cases, Open Terminal and run "npm run test".
		* Now we can see the result of all test cases.
		

UI Tests cases run command:

	Cypress: We have used Cypress to write our ui test cases which are available in the root folder with 'cypress' folder.
		* In order to run unit test cases, Open Terminal and run "npm run cypress open".
		* A Window will open, Click on E2E Testing.
		* Choose your browser and Tap start E2E testing button.
		* Now we can see all the test cases files, Click on each of them to run tests one by one.



In this Web application we have below screens and flows which are implemented.
	* We have 6 components in the application which is referring to one screen only to fetch the most popular artices.
	* In this screen we have dropdown at top right corner which shows us the articles for "Daily, Last week and Last month" news.
	* Select one of the dropdown value to see the respective news for each duration
