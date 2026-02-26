import React,{ useState } from 'react'


function useContactForm() {
  const [namee, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone]= useState("");
  const [message, setMessage] = useState("");

     const onName= (e) => {setName (e.target.value)};
    const onEmail =(e) => {setEmail(e.target.value)};
    const onPhone = (e) => {setPhone (e.target.value)};
    const onMessage=(e) => {setMessage (e.target.value)};


   const submit = (e) => {
    e.preventDefault();
    console.log("Name:", namee);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Message:", message);
  

  setName ("");
  setEmail("");
  setPhone("");
  setMessage("");

  };



  return {
    namee,
    phone,
    email,
    message,
    onName,
    onEmail,
    onPhone,
    onMessage,
    submit,
  };
}
export default useContactForm
