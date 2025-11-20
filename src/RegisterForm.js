import { useState } from "react";
import "./RegisterForm.css";
import SalarySelector from "./SalarySelector";
import Result from "./showOverlyTest"
import InputComponent from "./InputComponent"


export default function RegisterForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    employed: false,
    salary: 100,
  });


  const [showOverlay, setShowOverlay] = useState(false);
  // Auto validation using useEffect
  const btnIsDisabled = 
      formInputs.name.trim() === "" ||
      formInputs.phoneNumber.trim() === "" ||
      formInputs.age.trim() === "";


  // Name validation (letters & spaces)
  function handleName(e) {
    const value = e.target.value;

    const regex = /^[A-Za-z ]*$/;

    if (regex.test(value)) {
      setFormInputs((prev) => ({ ...prev, name: value }));
    }
  }

  // Phone number validation (digits only)
  function handlePhone(e) {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setFormInputs((prev) => ({ ...prev, phoneNumber: value }));
    }
  }

  // Age validation (digits only, max 3)
  function handleAge(e) {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 3) {
      setFormInputs((prev) => ({ ...prev, age: value }));
    }
  }

  return (
    <>
      <h2>Requesting a Loan</h2>
      <div className="bar"></div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formInputs);
          setShowOverlay(true); // show overlay on successful submit action
        }}
      >
        {/* Name */}
        {/* <div className="input-container">
          <div className="label">Name</div>
          <div className="input">
            <input value={formInputs.name} onChange={handleName} />
          </div>
        </div> */}
        <InputComponent inputTitle="Name"  value={formInputs.name} handleInput={handleName}/>

        {/* Phone */}
        {/* <div className="input-container">
          <div className="label">Phone Number</div>
          <div className="input">
            <input value={formInputs.phoneNumber} onChange={handlePhone} />
          </div>
        </div> */}
        <InputComponent inputTitle="Phone Number"  value={formInputs.phoneNumber} handleInput={handlePhone}/>

        {/* Age */}
        {/* <div className="input-container">
          <div className="label">Age</div>
          <div className="input">
            <input value={formInputs.age} onChange={handleAge} />
          </div>
        </div> */}
        <InputComponent inputTitle="Age"  value={formInputs.age} handleInput={handleAge}/>

        {/* Employed */}
        <div className="input-container">
          <div className="label">Are you an employee?</div>
          <div className="input">
            <input
              type="checkbox"
              checked={formInputs.employed}
              onChange={(e) =>
                setFormInputs((prev) => ({
                  ...prev,
                  employed: e.target.checked,
                }))
              }
            />
          </div>
        </div>

        {/* Salary */}
        <div className="input-container">
          <div className="label">Salary</div>
          <div className="input">
            <SalarySelector
              value={formInputs}
              setInputs = {setFormInputs}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="input-container">
          <button type="submit" className={btnIsDisabled?"disabled":""} disabled={btnIsDisabled}>
            Submit
          </button>
        </div>
      </form>

      {/* Render overlay component so it can appear when showOverlay === true */}
      <Result showOverlay={showOverlay} setShowOverlay={setShowOverlay} formInputs={formInputs} />
    </>
  );
}
