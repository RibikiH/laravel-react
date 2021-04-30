import React, {SetStateAction} from "react"

interface Errors {
    [key : string]: [0] ;
}

export const InputText = ({ errors, attribute, value, setValue, ...rest }: { errors: Errors, attribute: string, value: string, setValue: SetStateAction<any>, placeholder?: string,
    type?: string}) => (
    <>
        <div className="mt-1 flex rounded-md">
            <input type={rest.type ? rest.type : 'text'} name={attribute} id={attribute} value={value} onChange={(e) => setValue(e.target.value)}
                   className={`p-3 flex-1 block w-full sm:text-sm border-gray-300 focus:outline-none focus:border-yellow-700 border-b`
                   + (errors[attribute] && errors[attribute].length > 0 ? ' border-red-600' : '')}
                   {...rest} />
        </div>
        { errors[attribute] && errors[attribute].length > 0 ?
            <p className="text-red-600 text-xs italic mt-1">{errors[attribute][0]}</p> : null
        }
    </>
)
