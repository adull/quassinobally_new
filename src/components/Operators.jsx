import Draggable from "./Draggable";

const Operators = ({ operators }) => {
    return (
        <div className="flex">
        {operators.map((item, index) => (
            <div className="mr-2">
                <Draggable index={index} type={'OPERATORS'} value={item}>
                    {item}
                </Draggable>
            </div>
        ))}
        </div>
    );
}

export default Operators;
