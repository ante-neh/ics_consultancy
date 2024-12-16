
import { FC } from "react"

const Button: FC<{className:string, name:string, handleOnClick:()=>void}> = ({className, name,  handleOnClick}) => {
  return (
    <button onClick={handleOnClick} className={className}>
        {
            name
        }
    </button>
  )
}

export default Button