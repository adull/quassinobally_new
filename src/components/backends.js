import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { createTransition, TouchTransition } from 'dnd-multi-backend'

const HTML5AndTouch = {
    backends: [
        {
            backend: HTML5Backend,
            transition: createTransition('touchstart', () => {
                return 'ontouchstart' in window || navigator.maxTouchPoints > 0
            })
        },
        {
            backend: TouchBackend,
            options: { enableMouseEvents: true },
            preview: true,
            transition: TouchTransition
        }
    ]
}

export default HTML5AndTouch