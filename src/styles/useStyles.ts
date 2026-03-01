import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
    },
    column: {
        flex: 1,
        padding: '10px',
        minHeight: '300px',
        border: '1px solid #3806ff',
        borderRadius: '15px',
    },
    columnHeader: {
        backgroundColor: '#b99bff',
        padding: '10px',
        borderRadius: '15px',
    },
    taskItem: {
        border: '2px solid #0095ff',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#e6fbff',
    },
    taskTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
        textTransform: 'capitalize',
    },
    taskDate: { 
        fontSize: '12px', 
        color: '#888', 
        marginBottom: '8px' 
    },
      taskDesc: { 
        fontSize: '14px', 
        color: '#555', 
        marginBottom: '10px' 
    },
      actions: { 
        display: 'flex', 
        justifyContent: 'flex-end', 
        gap: '10px', 
        marginTop: '10px' 
    },
    taskForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        margin: '20px',
    },
        taskStatus: {
        padding: '4px 8px',
        borderRadius: '5px',
        border: '2px solid #ffffff',
        fontSize: '10px',
        backgroundColor: '#a5f1ff',
        fontWeight: 'bold',
    }
})