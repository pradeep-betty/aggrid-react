import { useState } from "react";

const useConstructor = (_callBack = () => { }) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) { return; }
    else {
        _callBack();
        setHasBeenCalled(true);
    }
}
export default useConstructor;