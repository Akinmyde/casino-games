import { ChangeEvent, InputHTMLAttributes } from "react"

interface Props {
    type: "text" | "password"
    placeholder: string
    value: string
    required: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: Props) => {
    return (
        <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="p-3 bg-gray-700 rounded"
        required={props.required}
      />
    )
}