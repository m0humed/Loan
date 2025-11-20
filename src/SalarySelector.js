
export default function SalarySelector({value , setInputs}){
    let Salaries = [{id:1 , salary:"less than 500K" , value:100},
                    {id:2 , salary:"more than 500K" , value:200 },
                    {id:3 , salary:"about than 500K", value:300}] 
    
    let SalariesView = Salaries.map((salary)=>{
        return(
            <option value={salary.value} key={salary.id}>
                {salary.salary}
            </option>
        )
    })

    return(
        <select value={value.salary}
             onChange={(value) =>{
                setInputs((prev) => ({ ...prev, salary: value.target.value }))
                }}
        >
            {SalariesView}
        </select>
    )


}