# ReactProject
INSTALLATION
	
	1- cd to project folder
	2- run the fofllowing command to create image: 
		docker build -t nameofyourapp:latest .
	3- run the following command:
		docker run --name nameofyourchoice -d -p 3000:3000 nameofyourapp:latest
	4- open localhost:3000 on browser
USAGE

	 1 camera and at least 1 algorithm should be selected.
	 
	 Algortihm parameters can be set using settings button on algorithms list items.
	 
	 Algorithm description can be seen by clicking more button on algorithms list items.
	 
	 After clicking start button, a JSON object similar to
	 {cam: '0', algorithms:{id: 0 parameters: ['default', 2, false, 'default']} }
         will be logged on console. 
	 
	 When parameters are not selected for an algorithm, default values are used.
	 
	
