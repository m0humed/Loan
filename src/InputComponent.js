import './RegisterForm.css'

export default function InputComponent({inputTitle , value , handleInput  }){

    return(
    <div className="input-container">
          <div className="label">{inputTitle}</div>
          <div className="input">
            <input value={value} onChange={handleInput} />
          </div>
    </div>
    )


}