# B.Teach Final Year Project titled "iLearn" By Group 3 

## List of team members
| First Name   | Last Name|
| -------------|----------|
| Anamika      | Gupta    |
| Jaswant      | Chaudhary|
| Satya Prakash| Mall     |
| Indrajeet    | Kumar    |

### Following tech stacks have been used for creation of User Interface (Front-end) of the application 
- React
- React-redux(Thunks, ApplyMiddleware)
- Fetch
- JavaScript
- HTML
- CSS 


### Following tech stacks have been used for creating server side (Back-end) of the application
- Node.js
- Express.js
- Axios
- JavaScript
- MongoDB atlas
- Bcrypt
- Json-web-tokens
- Random-token
	
## Features of the project
### This project has the following features
- [x] User can Login 
- [x] User can Signup 
- [x] User can Join a class

## Sanpshot of the project 

### How to run:
#### Step.1 Open your teminal in VS Code or system terminal

#### Step.2 Go to the following GitHub repository and clone the repo into your system using the following command into the terminal of your system: 
	Git clone https://github.com/jchy/Final_Year_Project.git 
	
#### Step. 3 Navigate inside the client directory of the cloned folder using the following commands:
	cd client
	
#### Step. 4 Install the required packages and modules using the following command:
	npm install
	
#### Step.5 To run the client side (front-end) of the project run the following command into your terminal 
	npm run start
	
#### Step.6 Now navigate inside the backend directory of the project from the client directory using following commands:
	cd ..
	cd backend
	
#### Step.7 To start the backend server type the following command into your terminal 
	npm run start
	


#### How to run:

- Inside `server` folder, create a new file called `.env` which stores your `ATLAS_URI`, `SECURITY_KEY` and `CLIENT_URL` information
  - store your database URI inside `ATLAS_URI` variable
  - store your security key inside `SECURITY_KEY` variable
  - store your client url inside `CLIENT_URL` variable
  - example:
  ```
  ATLAS_URI =mongodb+srv://admin:<password>@cluster0.8aezk.gcp.mongodb.net/classroom?retryWrites=true&w=majority
  SECURITY_KEY = D73373D9B4ED6FEC5B8B2DAF6WA929B1C7D14CDC88B196EBDCCEA77AFF7BB9
  CLIENT_URL = http://localhost:3000/
  ```
- Inside `client` folder, create a new file called `.env` which stores your `REACT_APP_SECURITY_KEY` and `REACT_APP_BACKEND_URL` informations

  - store your security key inside `REACT_APP_SECURITY_KEY` variable, note that this value must same as `SECURITY_KEY` in `server/.env` file
  - store your server url inside `REACT_APP_BACKEND_URL` variable
  - example:

  ```
  REACT_APP_SECURITY_KEY = D73373D9B4ED6FEC5B8B2DAF6WA929B1C7D14CDC88B196EBDCCEA77AFF7BB9
  REACT_APP_BACKEND_URL = http://localhost:5000
  ```

