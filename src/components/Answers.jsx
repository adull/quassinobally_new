import Draggable from "./Draggable";

const Answers = ({ answers }) => {
    return (
        <>
        {answers.map((answerChar, index) => (
            <Draggable key={index} index={index} position={'ANSWER'} type={'ANSWER  S'} value={answerChar}>
                {answerChar}
            </Draggable>
        ))}
        </>
    );
}

export default Answers;
