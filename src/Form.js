import React from "react"

function Form(){
    const [name, setName] = useState("")
    const [newName, setNewName] = useState([])

    function handleChange(event){
        setName(prevName => ([...prevName, newName]))
    }
    return(
        <div>
            <form>
                <input type="text"
                       placeholder="First Name"
                       name="firstName"
                       value=""
                       onChange=""/>
                <input type="text"
                       placeholder="Last Name"
                       name="lastName"
                       value="lastName"
                       onChange=""/>
            </form>
        </div>
    )
}
export default Form