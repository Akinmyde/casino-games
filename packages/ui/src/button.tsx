/*  We will keep this simple for now, just to showcase the idea.
    In real life, we should have different state for this button
*/
interface Props {
    text: string
}

export const Button = ({ text }: Props) => {
    return (
        <button
          type="submit"
          className="px-4 py-2 mt-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          {text}
        </button>
    )
}