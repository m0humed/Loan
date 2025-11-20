import { useContext } from 'react'
import {FormData} from "./Contexts/FormContext"

export default function InsidarInput(){
    const input = useContext(FormData)

    return(
        <>
          <div className="label">{input.title}</div>
          <div className="input">
            <input value={input.value} onChange={input.handler} />
          </div>
        </>
    )
}