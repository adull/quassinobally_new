import { useDrop } from 'react-dnd'

function DropTarget({ accept, dropFn, children  }) {
    const [collectedProps, drop] = useDrop(() => ({
        accept,
        drop: (item, monitor) => {
            // console.log('dropped item:')
            // console.log(item)
            dropFn(item)
            // console.log(monitor)
            return undefined
        },
        collect: (monitor) => {
            // console.log({ monitor })
            return ({
                isOver: monitor.isOver()
            })
        }
    }))

    return (
        <div className="bg-red-50 p-4 w-[100%] h-[100%]" ref={drop}>
            {children}
        </div>
    )
}

export default DropTarget