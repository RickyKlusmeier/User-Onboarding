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




