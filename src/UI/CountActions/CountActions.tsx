import {FC} from "react";
import styles from './CountActions.module.scss'

interface CountActionsProps {
    count?: number
}

const CountActions: FC<CountActionsProps> = ({count}) => {
    return (
        <div className={styles.wrapper}>
            <p className='verySmall'>{count}</p>
        </div>
    );
};

export default CountActions;