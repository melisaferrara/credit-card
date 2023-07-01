

const CreateButton = ({ num }) => {

    function esPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
       
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        } 
        return true
    }

    const handleClick = () =>{
        console.log(num)
    }

    return <div>
        <button onClick={handleClick} className={esPrimo(num) ? "red" : num % 2 === 0 ? "green" : "yello"}>{num}</button>
    </div>
}

export default CreateButton

