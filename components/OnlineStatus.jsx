import { OnlineStatusUpdater } from "./UserOnlineStatus";
import { OnlineStatusListener } from "./UserOnlineStatus";

const OnlineStatus = ({userId}) => {
    return (
        <>
            <OnlineStatusUpdater userId={userId} />
            <OnlineStatusListener userId={userId} />
        </>
    );
};

export default OnlineStatus;
