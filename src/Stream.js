import VideoTile from "./VideoTile";
import HlsView from "./HlsView";
import {
  selectLocalPeer,
  selectPeers,
  useHMSStore,
} from "@100mslive/react-sdk";
import camoff from "./no-camera.png";

function Stream() {
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  console.log(localPeer);
  return (
    <>
      {localPeer.roleName === "hls-viewer" && <HlsView />}
      <div className="stream">
       
        {localPeer.roleName === "broadcaster" &&
          peers
            .filter((peer) => peer.roleName === "broadcaster")
            .map((peer) => (
              <VideoTile key={peer.id} peer={peer} peers={peers}  />
            ))}
            <img src={camoff} className={'camOff'}/>
            
      </div>
    </>
  );
}

export default Stream;
