// importing styling using module
import styles from '../styles/CustomTooltips.module.css'

const CustomTooltip = () => {
    return (

        // tooltip container
        <div className={styles.container}>
            {/* container heading */}
            <h1>Custom ToolTip</h1>

            {/* left tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltip */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.leftPosition}`}>
                        You are now viewing Left tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='leftColor'>
                            left
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* top tooltips */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltip */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.topPosition}`}>
                        You are now viewing Top tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='topColor'>
                            top
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* bottom tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltips */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.bottomPosition}`}>
                        You are now viewing Bottom tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='bottomColor'>
                           botton
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* right tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltips */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.rightPosition}`}>
                        You are now viewing Right tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='rightColor'>
                            right
                        </span>  &nbsp; Tooltip....
                </button>
            </div>
      </div>
    );
}


export default CustomTooltip;