import {useImperativeHandle, useRef} from "react";

export default function ResultModal({targetTime, ref, remainingTime, resetTime}) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>{userLost && 'You Lost'}</h2>
            <p>The target time was <strong>{targetTime}</strong> seconds</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong></p>
            <form method="dialog" onSubmit={resetTime}>
                <button>Close</button>
            </form>
        </dialog>
    )
}
