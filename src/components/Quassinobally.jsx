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
    const reducer = (state, action) => {
        if(action.type === ACTIONS.DROP) {
            const { from, to, item } = action
    
            return {
                ...state,
                letters: item.to === 'LETTERS' ? lettersDropFn({ from, to, item }) : [...state.letters],
                operators: OPERATORS,
                answers: item.to === 'ANSWERS' ? answersDropFn({ from, to, item }) : [...state.answers], 
    
            }
        }
        throw Error('Unknown action')
    }
    
    const generateLetters = () => {
        const umm = generate({ minLength:3 , maxLength: 10}).split('').map((character, index) => { return { character, index } })
        console.log({ umm })
        return umm
    }

    const [state, dispatch] = useReducer(reducer, {
        // generate random word between 3 and 10 chars, split, then add an original index to each character
        letters: generateLetters(),
        operators: OPERATORS,
        answers: []
    })

    const clearAnswers = () => {
        // something here..
    }

    useEffect(() => {
        state.letters = generateLetters()
    }, [])

    const lettersDropFn = ({from, to, item}) => {
        console.log({from, to, item})        
    }

    const answersDropFn = ({from, to, item}) => {
        console.log({from, to, item})
    }

    const dropFn = ({from, to, item}) => dispatch({ type: 'DROP', from, to, item });


    return (
        <DndProvider backend={MultiBackend} options={HTML5AndTouch}>
            <Box type='letters' dropFn={dropFn} >
                <Letters letters={state.letters}  />
            </Box>
            <Box type='operators' dropFn={dropFn} >
                <Operators operators={ state.operators } />
            </Box>
            <Box type='answer' dropFn={dropFn} >
                <Answers answers={ state.answers }  />
            </Box>
        </DndProvider>
	
    );
}

export default Quassinobally;
