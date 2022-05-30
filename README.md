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
 ### Below Images explain about project, How Project Looks Like exact:

![screencapture-localhost-3000-2022-05-29-18_19_48](https://user-images.githubusercontent.com/80479635/170913277-56d21e2b-e069-48c7-ad71-447d92dbe0ba.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-2022-05-29-17_13_12](https://user-images.githubusercontent.com/80479635/170913281-3efc62b4-8af6-4327-b2bf-428edc9cc349.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-2022-05-29-17_13_53](https://user-images.githubusercontent.com/80479635/170913284-8f4599cb-4412-4209-a1bd-bc2e444c4a6b.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-2022-05-29-18_18_01](https://user-images.githubusercontent.com/80479635/170913286-29c2de36-8501-4239-97e3-b3aac13daa6c.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-classwork-2022-05-29-17_32_02](https://user-images.githubusercontent.com/80479635/170913289-46ad5bb0-054f-4038-b53c-69a175bbebe8.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-m-629360d3363470401c4936c9-2022-05-29-17_32_55](https://user-images.githubusercontent.com/80479635/170913291-54d97b19-e04d-4eee-ad3b-ef1bd73ff1d4.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-people-2022-05-29-17_37_00](https://user-images.githubusercontent.com/80479635/170913294-ba4eb453-4d9a-46c8-9fa6-e43e64d329d0.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-people-2022-05-29-18_18_31](https://user-images.githubusercontent.com/80479635/170913296-9d425385-58ca-4735-ab26-bb788f9e3848.png)
![screencapture-localhost-3000-62935c49363470401c4936c8-setting-2022-05-29-18_18_56](https://user-images.githubusercontent.com/80479635/170913297-4ce4dca6-1234-47ee-a312-20413fc181f5.png)
![screencapture-localhost-3000-about-2022-05-29-17_10_30](https://user-images.githubusercontent.com/80479635/170913300-638b2cf7-600f-4bef-82ce-eff4ef94da01.png)
![screencapture-localhost-3000-join-2022-05-29-17_11_38](https://user-images.githubusercontent.com/80479635/170913301-8ba652e9-035a-4d06-935d-fa0de0f9d449.png)
![screencapture-localhost-3000-join-2022-05-29-17_12_32](https://user-images.githubusercontent.com/80479635/170913302-c32b226b-47d7-4b43-a702-bdcadafade63.png)
![screencapture-localhost-3000-join-2022-05-29-17_36_14](https://user-images.githubusercontent.com/80479635/170913303-c80feb74-7257-4ef0-b83c-d8892f49597a.png)
![screencapture-localhost-3000-login-2022-05-29-17_10_13](https://user-images.githubusercontent.com/80479635/170913307-f084879c-f0a1-4813-9c37-50436156b079.png)
![screencapture-localhost-3000-profile-2022-05-29-18_01_13](https://user-images.githubusercontent.com/80479635/170913308-41956fbd-dad4-4fca-9e63-71d4d191ec61.png)
![screencapture-localhost-3000-profile-edit-2022-05-29-18_01_37](https://user-images.githubusercontent.com/80479635/170913311-65978372-5bc5-406e-8d47-1b39f5f676ba.png)
![screencapture-localhost-3000-register-2022-05-29-17_09_37](https://user-images.githubusercontent.com/80479635/170913314-816be292-26ce-4887-a7b7-05cf30245e91.png)

