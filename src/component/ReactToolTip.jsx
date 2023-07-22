import { Tooltip } from 'react-tooltip'

import styles from '../styles/App.module.css'

const ReactTooltip = () => {
    const directions = ['left', 'top', 'bottom', 'right'];
    return (

        <div className={styles.gridContainer}>
            <h1 style={{margin:0}}>React ToolTip</h1>
            {directions.map(direction => 
                <button
                    id={direction}
                    className={styles.gridItems}
                    key={direction}>
                     Hover over this button to see &nbsp;
                        <span
                            id={`${direction}Color`}
                            className={styles.directions}>
                            {direction}
                        </span>  &nbsp; Tooltip....
                    <Tooltip
                        className= {direction}
                        anchorSelect= {`#${direction}`}
                        content={
                            `You are now viewing ${direction} Tooltip.!!`
                        }
                        place={`${direction}`}
                    />
                </button>
            )}
      </div>
    );
}


export default ReactTooltip;