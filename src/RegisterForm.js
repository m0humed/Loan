import { useState } from "react";
import "./RegisterForm.css";
import SalarySelector from "./SalarySelector";
import Result from "./showOverlyTest"
import InputComponent from "./InputComponent"
import {FormData} from "./Contexts/FormContext"

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
        <FormData.Provider title="Name" value={formInputs.name} handler={handleName}>
                <InputComponent />
        </FormData.Provider>

        {/* Phone */}
        <FormData.Provider title="Phone Number"  value={formInputs.phoneNumber} handler={handlePhone}>
                <InputComponent />
        </FormData.Provider>

        {/* Age */}
        <FormData.Provider title="Age" value={formInputs.age} handler={handleAge}>
                <InputComponent />
        </FormData.Provider>

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
