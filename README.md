
## Server Side Validation Workshop


![server validation](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/16441230-f61c-4a68-bd06-9ea32076c12d/validation.png)

##### What is sever side validation

In the server-side validation, information is being sent to the server and validated using one of server-side languages. If the validation fails, the response is then sent back to the client

#### Why it is useful
This method is secure because it will work even if JavaScript is turned off in the browser and it can’t be easily bypassed by malicious users.


#### Joi Tool
Joi allows you to create schemas for JavaScript objects (an object that stores information) to ensure validation of key information.

Here is an example for login fields using ```joi``` validation.

```js
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(7).required(),
  });
  // Return result.
const result = Joi.validate({ username: 'abc', password: 'sh1121993$$MO'}, schema);
// result.error === null -> valid
```


- The server and the front-end have been set up for you, you can have a look to understand the flow, then follow up the exercise instructions bellow

### Exercise
- Clone the repository.
- Go to the terminal and run ```npm i```
- run ```npm run dev```
- Open ```localhost:3000``` in your browser
- Login form will be displayed, try filling fields, then open dev tools -> console. a message will be displayed depend on the value you're filling out, test the login form until getting a message says `login validation is confirmed`
- Click on signup button and make validation for all the variables. The variables are:
  * username -> should be string
  * email -> should be an email  
  * password -> should has at least 6 letters and contains [aA0-9]
  * confirmPassword -> The same password value  
  * role -> should be admin or user
  * mobile -> should be a number and at least has 7 numbers

_Note: All variables are required_
