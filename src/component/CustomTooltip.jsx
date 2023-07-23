
import styles from '../styles/CustomTooltips.module.css'

const CustomTooltip = () => {
    return (

        <div className={styles.container}>
            <h1>Custom ToolTip</h1>
            <div className={`${styles.directions} ${styles.show}`}>
                <div className={styles.tooltip}>
                    <span className={`${styles.tooltipText} ${styles.leftPosition}`}>
                        You are now viewing Left tooltip.!!!
                    </span>
                </div>
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='leftColor'>
                            left
                        </span>  &nbsp; Tooltip....
                </button>
            </div>
            <div className={`${styles.directions} ${styles.show}`}>
                <div className={styles.tooltip}>
                    <span className={`${styles.tooltipText} ${styles.topPosition}`}>
                        You are now viewing Top tooltip.!!!
                    </span>
                </div>
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='topColor'>
                            top
                        </span>  &nbsp; Tooltip....
                </button>
            </div>
            <div className={`${styles.directions} ${styles.show}`}>
                <div className={styles.tooltip}>
                    <span className={`${styles.tooltipText} ${styles.bottomPosition}`}>
                        You are now viewing Bottom tooltip.!!!
                    </span>
                </div>
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='bottomColor'>
                           botton
                        </span>  &nbsp; Tooltip....
                </button>
            </div>
            <div className={`${styles.directions} ${styles.show}`}>
                <div className={styles.tooltip}>
                    <span className={`${styles.tooltipText} ${styles.rightPosition}`}>
                        You are now viewing Right tooltip.!!!
                    </span>
                </div>
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