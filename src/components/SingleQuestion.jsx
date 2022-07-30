import React from 'react'

function SingleQuestion({ question, pos, questionObject, setQuestionObject }) {

    const options = [question.correct_answer, ...question.incorrect_answers];
    const [shuffledArray, setShuffledArray] = React.useState([]);
    const [optionChoose, setOptionChoose] = React.useState(null);

    React.useEffect(() => {
        async function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                // Generate random number
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        const Shuffle = shuffleArray(options).then(data => setShuffledArray(data));
    }, [question])

    function onOptionClick(index) {
        const newQuestionOnj = {
            index: pos,
            correct_answer: question.correct_answer,
            clicked_answer: shuffledArray[index],
            clicked_index: index,
            shuffledArray: shuffledArray,
        }
        setQuestionObject(newQuestionOnj);
        setOptionChoose(index)
    }
    return (
        <div>
            <div className='text-primary'>
                <h3 className='mt-2 text-lg font-bold tracking-wide'>{question.question}</h3>
                <div className='pt-3 pb-5 border-b border-primary-light h-auto'>
                    {shuffledArray.map((option, index) => (<span onClick={() => onOptionClick(index)} key={index}
                        className={optionChoose === index ? "border border-[#D6DBF5] px-3 py-1 mr-3 rounded-full bg-primary-light" : " border border-[#D6DBF5] px-3 py-1 mr-2 rounded-full"}>{option}</span>))}
                </div>
            </div >
        </div>

    )
}

export default SingleQuestion