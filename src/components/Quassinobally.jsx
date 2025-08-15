import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'dnd-multi-backend'
import { useEffect, useReducer } from 'react'
import { generate } from 'random-words'

import { OPERATORS, ACTIONS } from '../constants'

import HTML5AndTouch from './backends'

import Box from './Box'
import Letters from './Letters'
import Operators from './Operators'
import Answers from './Answers'



const Quassinobally = () => {
    const lettersDropFn = ({from, to, item}) => {
        console.log({from, to, item})        
    }

    const answersDropFn = ({from, to, item, state}) => {
        const {letters, operators, answers } = state
        if(from === 'LETTERS') {
            // console.log(state.letters)
            const arrIndex = letters.findIndex(letter => letter.index === item.index)
            console.log(arrIndex)
            if(arrIndex > -1) {
                letters.splice(arrIndex, 1)
            }
        }
        return {
            ...state,
            letters: letters,
            operators: operators,
            answers: [...answers, {answerChar: item.value, index: item.index, type: item.type}]
        }
        
    }

    const reducer = (state, action) => {
        const { from, to, item, type } = action
        if(type === ACTIONS.INIT) {
            return {
                ...state,
                letters: generateLetters(),
                operators: [...state.operators],
                answers:  [...state.answers], 
    
            }
        }
        else if(type === ACTIONS.DROP) {
            if(to === 'LETTERS') {
                return lettersDropFn({ from, to, item, state })
            } else if(to === 'ANSWERS') {
                return answersDropFn({ from, to, item,  state })
            } else {
                return {
                    ...state
                }
            }
            // return {
            //     ...state,
            //     letters: to === 'LETTERS' ? [lettersDropFn({ from, to, item })] : [...state.letters],
            //     operators: OPERATORS,
            //     answers: to === 'ANSWERS' ? answersDropFn({ from, to, item, answers: state.answers }) : [...state.answers], 
            // }
        }
        throw Error('Unknown action')
    }
    
    const generateLetters = () => {
        const letters = generate({ minLength:3 , maxLength: 10}).split('').map((character, index) => { return { character, index } })
        // console.log({ letters })
        return letters
    }

    const [state, dispatch] = useReducer(reducer, {
        // generate random word between 3 and 10 chars, split, then add an original index to each character
        letters: [],
        operators: OPERATORS,
        answers: []
    })

    const clearAnswers = () => {
        // something here..
    }

    useEffect(() => {
        console.log(`useeffect[]`)
        dispatch({ type: 'INIT' })
        // state.letters = generateLetters()
    }, [])

    

    const dropFn = ({ from, to, item }) => {
        console.log('dropfn just called ')
        // console.log({ from, to, item })
        return dispatch({ type: 'DROP', from, to, item });
    }


    return (
        <DndProvider backend={MultiBackend} options={HTML5AndTouch}>
            <Box type='LETTERS' dropFn={dropFn} >
                <Letters letters={state.letters}  />
            </Box>
            <Box type='OPERATORS' dropFn={dropFn} >
                <Operators operators={ state.operators } />
            </Box>
            <Box type='ANSWERS' dropFn={dropFn} >
                <Answers answers={ state.answers }  />
            </Box>
        </DndProvider>
	
    );
}

export default Quassinobally;
