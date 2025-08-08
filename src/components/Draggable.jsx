import { useDrag } from 'react-dnd'

function Draggable({ index, type, value, children }) {
    const [{isDragging}, drag] = useDrag(() => ({
    type,
    item: { index, type, value },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return isDragging ? (
    <div style={{color: 'black', opacity: 0}}>{children}</div>
  ) : (
    <div style={{color: 'red'}} ref={drag}>
      {children}
    </div>
  )
}

export default Draggable