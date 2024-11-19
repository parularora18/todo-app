import styles from "./Footer.module.css"
export default function footer({ completedTodos, totalTodos }) {
    return <div className= {styles.Footer}> 
        <span className = {styles.item}> Completed Todos : {completedTodos}</span>
        <span className = {styles.item}> Total Todos : {totalTodos}</span>
    </div>
}