import React from "react";

export default function userForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-user-submit">
        <h2>New User</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>
      <div className="form-user inputs">
        <h4>User Information</h4>

        <label>Name</label>
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />

        <div>
          <label>Email</label>
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="text"
            />
        </div>

        <div>
          <label>Password</label>
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
            />
        </div>
        
        <label>Terms Of Service</label>
          <input
            type="checkbox"
            name="termsOfService"
            onChange={onChange}
            checked={values.termsOfService}
          />
    
        <div>
          <button id="button" disabled={disabled}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}




// import React, { useState, useEffect } from 'react';
// import App from './App';
// import * as yup from 'yup';


// const schema = yup.object().shape({
//     name: yup.string().required('Name is required').min(5, 'name needs to be at least 5 chars'),
//     email: yup.string().required('Email is required').min(5, 'email needs to be at least 5 chars'),
//     password: yup.string().required('Password is required').min(5, 'password needs to be at least 5 chars'),
//     terms: yup.boolean().oneOf([true], 'Terms must be accepted to continue'),
// })

// const initialFormValues = {
//     name: '',
//     email: '',
//     password: '',
//     terms: false
// }

// const initialFormErrors = { 
//     name: '',
//     email: '',
//     password: '',
//     terms: false
// }


// export default function Form() {
//     const [formValues, setFormValues] = useState(initialFormValues)
//     const [disabled, setDisabled] = useState(true)
//     const [formErrors, setFormErrors] = useState(initialFormErrors)
//     const [users, setUsers] = useState([]);

//     const getUsers = () => {
//         axios
//           .get(`https://reqres.in/api/users`)
//           .then((res) => {
//             setUsers(res.data.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       };

//       const postNewUser = (newUser) => {
//         axios
//           .post(`https://reqres.in/api/users`, newUser)
//           .then((res) => {
//             setUsers([...users, res.data]);
//             console.log(res.data.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//         setFormValues(initialFormValues);
//       };

//     const setFormErrors = (name, value) => {
//         yup.reach(schema, name).validate(value)
//         .then(() =>setErrors({...errors, [name]: ''}))
//         .catch(err => setErrors({...errors, [name]: err.errors[0]}))
//     }

//     const onChange = event => {
//         const {value, name, type, checked} = event.target;
//         const valueUsed = type === 'checkbox' ? checked : value
//         setFormValues({...formValues, [name]: valueUsed})
//     }

//     useEffect(() => {
//         schema.isValid(formValues).then(valid => setDisabled(!valid))
//     }, [formValues]);

//     return (
//         <div className='form-container'>
//             <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.terms}</div>
//             <form className='form'>
//                 <h2> Sign up here </h2>
//                 <label>Name
//                     <input value={formValues.name}
//                         name='name'
//                         type='text'
//                         onChange={onChange}
//                     />
//                 </label>
//                 <label>Email
//                     <input value={formValues.email}
//                         name='email'
//                         type='text'
//                         onChange={onChange}
//                     />
//                 </label>
//                 <label>Password
//                     <input value={formValues.password}
//                         name='password'
//                         type='password'
//                         onChange={onChange}
//                     />
//                 </label>
//                 <label>Terms of Service
//                     <input checked={formValues.terms}
//                         name='terms'
//                         type='checkbox'
//                         onChange={onChange}
//                     />
//                 </label>
//                 <button disabled={disabled}>Join Now!</button>
//             </form>
//         </div>
        
//     )

// }