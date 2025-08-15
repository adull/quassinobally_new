import DropTarget from "./DropTarget"

function Box({ type, dropFn, children }) {
    const acceptMapping = {
        LETTERS: [`LETTERS`],
        OPERATORS: [`OPERATORS`],
        ANSWERS: [`LETTERS`, `OPERATORS`]
    } 

    const toAccept = acceptMapping[type]

    return (
        <div className="w-full border b-1 mb-1">
            <DropTarget type={type} accept={ toAccept } dropFn={dropFn}>
                {children}
            </DropTarget>
        </div>
    )
}

export default Box