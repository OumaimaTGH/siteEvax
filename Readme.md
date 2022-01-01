@ copyright 2021 (evax plateform)

# EVAX PROJECT BACKEND PART

1) the first step is to install the some dependency by run "npm install" is the base directory

2) after that you can see in the ENV file the configuration project 

  (mongodb uri, the port number, passport and other)

3) you can see in the ENV file the MONGO_URI, you can change that by your owner path in 

the website mongodb atlas (you can test now  by the exist MONGO_URI)

4) some explication for they folders in the project:

/bin: you don't need to touch this its the responsible to the connection project and error handler

/config: in this folder we can see the passport configuration and the db connect.

/controller: all interraction with the DB is this folder

/models: all models to the project in this folder

/public: is the public directory by the navigator if you have a media or other

/routes/index: in this file you can use all routes of project

/util: middleware (ROLES and other)

/validation: the middleware validation is in this folder for all routes

/__test__ : in this folder is to apply a unit test (used only in the DEV mode)

/postman: in this folder uou can use all the exported api by postman software

ENJOY IT 

