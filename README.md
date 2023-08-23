# coding_challenge

### Installatin
Please ensure you have the following installed on your local machine;
+ Node - version <= 20.04
+ Mongo - version <= 4.4.6

### Cloning
You can clone the application by running the following command in your terminal 

`git clone https://github.com/Phran6ix/coding_challenge.git`

### Running the application
To start the application, 
+ Install the application dependecies, run the command below
  
  `npm install`
+ To start the application, run the command
  
    `npm start`

### API Response 
The API response is a JSON data type, which include the status code, a message and a data property


```javascript
{
  "message" : string,
  "success" : bool,
  "data"    : string
}
```

The API returns the following status code


| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 401 | `UNAUTHORIZED` |
| 500 | `INTERNAL SERVER ERROR` |


## API ENDPOINTS
### /v1/auth/register
This endpoint creates a user on the application, and before the user is created, there is a check for an existing user with the username, if a user witht the user name exists, an error is thrown. 
```javascript
{
    "status": 400,
    "message": "Username already exists",
    "data": null
}
```

The expected request body should include the username and password. The username is unique - more than one account cannot have the same username, and the password should be at least 6 alphanumeric characters. 

```javascript
{
    "username": "metasix",
    "password": "123467"
}
```

And the expected response to the request body is 

```javascript
{
    "status": 201,
    "message": "User has been created successfully",
    "data": {
        "username": "metasix0",
        "password": "$2a$13$66TFzRXrWjb2k41d8IreUesLZ9t1dbwHvEVXRyCiAWtsO.t6vMoD2",
        "_id": "64e559bc0e503aac06eb3e49",
        "createdAt": "2023-08-23T00:58:36.239Z",
        "updatedAt": "2023-08-23T00:58:36.239Z"
    }
}
```

### /v1/auth/login
This endpoints logs a user into the application, a token is returned to the user which grants to the user to access protected route. 
Data to be expected from the request body is the username and password. 

```javascript
{
    "username": "metasix",
    "password": "123456"
}
```

And the expected response to this request body

```javascript
{
    "status": 200,
    "message": "User signed successfully",
    "data": {
        "user": {
            "userId": "64e4bebd471c53d5104142ef",
            "username": "metasix",
            "password": "$2a$13$6eKGhSPelpWIZ.QA7fuKEuO4KzZb0JGCkbZe3g4I9HH92GDizmsXK"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTRiZWJkNDcxYzUzZDUxMDQxNDJlZiIsImlhdCI6MTY5Mjc0ODY0NiwiZXhwIjoxNjkzMzQ4NjQ2fQ.-0a2eJMk1iwDVQlIHsIsdyVPwf6_htat1DvEKbWcTuQ"
    }
}
```

### /dashboard
This is a protected endpoint in the application,. The only to access this route is to be logged in and set the authorization header to the token
The expected response to this endpoint 

```javascript
{
    "status": 200,
    "message": "Welcome to your dashboard metasix",
    "data": null
}
```
