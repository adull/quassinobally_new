import Draggable from "./Draggable";

const Answers = ({ answers }) => {
    console.log({ answers })
    return (
        <>
        {answers.map(({answerChar, type, index}) => { 
            console.log({ answerChar, type, index}); 
            return (
                <Draggable key={index} index={index} currentPos={'ANSWERS'} type={type} value={answerChar}>
                    {answerChar}
                </Draggable>
            )
        })}
        </>
    );
}

export default Answers;
