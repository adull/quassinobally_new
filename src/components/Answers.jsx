import Draggable from "./Draggable";

const Answers = ({ answers }) => {
    return (
        <>
        {answers.map((answerChar, index) => (
            <Draggable key={index} index={index} type={'ANSWERS'} value={answerChar}>
                {answerChar}
            </Draggable>
        ))}
        </>
    );
}

export default Answers;
