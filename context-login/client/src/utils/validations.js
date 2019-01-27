//will validate most emails for a @ and . any more then that is rediculous for client side validations will return true if match false if not
export const emailValidation = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//will take in a img url split at the . and pop off the file type and then it will get checked an array of file types, will return true if match false if not
export const imgValidation = img => (["jpg", "gif", "png", "jpeg"].indexOf(img.split(".").pop()) !== -1)

//password must be between 7 to 15 characters, contain one or more numbers and a special character, will return true or false 
export const passwordValidation = password => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)