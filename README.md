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
