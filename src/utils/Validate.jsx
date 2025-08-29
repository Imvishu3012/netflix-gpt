const Validate =(email, password)=>{
    const IsEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Password regex: at least 8 characters, one uppercase, one lowercase, one digit, one special character
  const IsPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if (!IsEmailValid)return "Invalid Email Address";
if (!IsPasswordValid) return " Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character."
 return null;
}
;
export default Validate;