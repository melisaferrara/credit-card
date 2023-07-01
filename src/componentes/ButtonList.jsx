import CreateButton from "./CreateButton"


function ButtonList ({num}) {
   
    const number = []
    for (let i = 0; i <= num; i++) {
        number.push(i)

 }
   return <div className="flex">
        {number.map((ele,i) =>{
         return <CreateButton 
           key={i}
           num={ele}
         />
        })}
   </div>
  
}

export default ButtonList