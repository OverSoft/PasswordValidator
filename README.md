# PasswordValidator
A simple password validator for use in Javascript projects.


# License
Anyone can do with this what he or she wants.
Modify it, use it in your commercial projects, etc...
Just mention this repo somewhere in your project.


# How to use
This project is ES6 based, but it should be easily adaptable to normal (old) Javascript.
To use, first import it:
```javascript
import {validateInput} from './passwordTools';
```

Then, to use it, simply pass in your verification requirements like this:
```javascript
const [valueIsValid, validationErrors] = validateInput(value, {
    required:         true,                    // Shorthand for minLength: 1
    minLength:        5,                       // Minimum characters
    maxLength:        100,                     // Maximum characters
    isEmail:          false,                   // Check if this is a valid e-mail address
    regex:            /[a-zA-Z]/,              // Test for this regex
    requireLowerCase: true,                    // At least one lower case letter is required
    requireUpperCase: true,                    // At least one upper case letter is required
    requireNumeric:   true,                    // At least one numeric character is required
    requireSymbols:   true,                    // At least one non-alphanumeric character is required (excluding space)
    func:             value => value === "yay" // Run the supplied function on this value, return a boolean
});
```

valueIsValid is a boolean indicating the value is validated or not
validationErrors is an array of strings containing the errors that were generated during validation

Alls validation requirements are optional, meaning if you don't pass (for example) maxLength, the value is not checked for a maximum length.
