import {createPortal} from 'react-dom';
export default function ResultModal({ref,remainingTime,targetTime,onReset}){
    const userLost = remainingTime <=0 ;
    const formattedRemTime = (remainingTime/1000).toFixed(2);
    const stoppedTime = targetTime - remainingTime/1000;
    const winMargin = 0.1; // seconds
    const userWin = !userLost && Math.abs(stoppedTime) <= winMargin;
    const score = Math.max(0,(1-(remainingTime/1000)/targetTime).toFixed(2)*100);
    return createPortal(
        <dialog  ref={ref} className="result-modal" >
            <h2> {userLost ? "You Lost" : userWin ? "You Win!" : score}</h2>
            <p>the target time was <strong>{targetTime} seconds. </strong></p>
            <p>you stopped the timer with <strong>{formattedRemTime} seconds left</strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
}