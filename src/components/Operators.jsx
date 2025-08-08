import Draggable from "./Draggable";

const Operators = ({ operators }) => {
    return (
        <div className="flex">
        {operators.map((item, index) => (
            <div className="mr-2">
                <Draggable id={index} type={'OPERATOR'}>
                    {item}
                </Draggable>
            </div>
        ))}
        </div>
    );
}

export default Operators;
