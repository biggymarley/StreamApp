import { selectLocalPeer, useHMSStore, useVideo } from "@100mslive/react-sdk";

function VideoTile({ peer, peers }) {
  const localPeer = useHMSStore(selectLocalPeer);

  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  const numberOfBroadCasters = () => {
    const broadcasters = peers.filter((peer) => {
      return peer.roleName === "broadcaster";
    });
    return broadcasters.length;
  };

  return (
    <div className="room__streamSpacevid">
      <p className="username">{localPeer.name}</p>
      <video
        ref={videoRef}
        className={numberOfBroadCasters() >= 2 ? "video" : ""}
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}

export default VideoTile;
