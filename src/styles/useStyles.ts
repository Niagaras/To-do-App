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
    }
})