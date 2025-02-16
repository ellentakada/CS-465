### Architecture

***Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*** 

The frontend is an interface a user uses to interact with the system. SPA is a light-weight application that handles contents with minimal usage, perfect for client-facing web applications such as Gmail and Facebook. HTML is a language used to handle how the content is displayed. 

HTML is a language used to handle how the content is displayed.  

Express is also a framework that assists Node.js to run a REST API. It provides structures so that setup and handling requests/response are feasible on a server.  

JavaScript is a language used for both front end and back end in MEAN environment. Unlike traditional full-stack development, MEAN environment can be developed with one language, JavaScript.   

***Why did the backend use a NoSQL MongoDB database?*** 

As MongoDB uses (JSON, JavaScript Serialized Object Notation) to hold documents, it can be easily implemented in MEAN stack which is centralized with JavaScript. This allows seamless data exchange without a compatibility issue.  

NoSQL MongoDB has a dynamic structure, which does not come with fixes tables. This is convenient when data comes with different attributes. 

### Functionality 

***How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?*** 

JSON stands for JavaScript Serialized Object Notation and is a subcategory of JavaScript. It has a fixed structure for each record, name and value. It is strictly used for data handling only. With the strict structure, it makes it possible to process input that is readable by a backend database.  

JavaScript is a scripting language, crucial to web application development. It controls behaviors and interaction such as manipulating, updating and controlling contents and user action.  

***Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*** 

We refactored code in footer from simply referring to a html file to using MVC routing. MVC routing is structured by Model, View and Controller. This creates a structure to organize code by each function. In our case, we managed MVC under app_server folder. 

 

### Testing 

***Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*** 

During our development, we created GET, POST, PUT, DELETE HTTP methods. Methods are tested with postman and browser.  

GET is used to retrieve data from database. In our case, it was used to display all the trips and individual trips on travlr page. 

POST is used to create a document to database. In our case, it was used to register and login and add a trip. 

PUT is used to modify an existing document in database. In our case, it was used to edit a trip.  

With register and login methods, the server issues a token to keep track of a session. The unique token is refreshed every time a user sign in, securing the session.  

### Reflection 

***How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*** 

The course was especially important in understanding the interworking between frontend and backend. I was able to apply learned skill from previous courses to develop a full application.  

I especially enjoyed in learning security aspect of the course. It was interesting to learn and deploy security methods such as authentication and token management, as well as tools to test with.  

I believe that full stack development requires high level of understanding in architecture, language and designing. I hope to further develop my skills in each area so that I can eventually develop a complete application myself. 
