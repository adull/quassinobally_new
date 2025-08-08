import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'dnd-multi-backend'
import { useEffect, useState } from 'react'
import { generate } from 'random-words'

import { OPERATORS } from '../constants'

import HTML5AndTouch from './backends'

import Box from './Box'
import Letters from './Letters'
import Operators from './Operators'
import Answers from './Answers'


const Quassinobally = () => {
    const [letters, setLetters] = useState([])
    const [answers, setAnswers] = useState([])

    const newLetters = () => {
        setLetters(generate({ minLength:3 , maxLength: 10}).split(''))
    }

    const clearAnswers = () => {
        // answersRef.current = []
        setAnswers([])
    }

    useEffect(() => {
        newLetters()
    }, [])

    const lettersDropFn = (item) => {
        console.log(`do nothing prolly letters`)
    }

    const operatorsDropFn = (item) => {
        console.log(`do nothing prolly operators`)
    }

    const answersDropFn = (item) => {
        // console.log(`in parent, item is:`)
        // console.log(item)
        const tempLetters = letters
        console.log({ tempLetters })
        tempLetters.splice(item.index, 1)
        console.log({ tempLetters })
        setLetters(tempLetters)
        // const tempAnswers = answers
        // tempAnswers.push(item.value)
        setAnswers([...answers, item.value])
        
        // setLetters(letters.splice(item.index, 1))
        
    }

    return (
        <DndProvider backend={MultiBackend} options={HTML5AndTouch}>
            <Box type='letters' dropFn={lettersDropFn} >
                <Letters letters={letters}  />
            </Box>
            <Box type='operators' dropFn={operatorsDropFn} >
                <Operators operators={ OPERATORS } />
            </Box>
            <Box type='answer' dropFn={answersDropFn} >
                <Answers answers={ answers }  />
            </Box>
        </DndProvider>
	
    );
}

export default Quassinobally;
