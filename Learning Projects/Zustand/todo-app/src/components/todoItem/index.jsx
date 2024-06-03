import React from "react"
import useTodoStore from '../../store/todoStore'
import { animate, motion } from "framer-motion"

const TodoItem = () => {
    const { removeTodo, toggleTodo } = useTodoStore();
    const variants = {
        animate: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: 50 }
    }
    return (
        <motion.li variants={variants}
            initial="initial"
            animate="animate"
            className={'flex items-center p-2'}
            layout
        >
            <input type="checkbox" />
        </motion.li>
    )
}

export default TodoItem