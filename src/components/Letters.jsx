import Draggable from "./Draggable";

const Letters = ({ letters }) => {
    // console.log({letters})
    return (
        <div className="flex">
        {letters.map((letter, index) => (
            <div className="mr-2">
                <Draggable key={index} index={letter.index} currentPos={`LETTERS`} type={'LETTERS'} value={letter.character}>
                    {letter.character}
                </Draggable>
            </div>

        ))}
        </div>
    );
}

export default Letters;
