import {
  VideocamOutlined,
  VideocamOffOutlined,
  MicNoneOutlined,
  MicOffOutlined,
  LogoutOutlined,
  PodcastsOutlined,
  StopCircleOutlined,
} from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import {
  selectHLSState,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import {
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectLocalPeer,
} from "@100mslive/react-sdk";

function Controls() {
  const hmsActions = useHMSActions();
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const localPeer = useHMSStore(selectLocalPeer);
  const hlsState = useHMSStore(selectHLSState);

  const startHLSStreaming = async () => {
    try {
      await hmsActions.startHLSStreaming();
    } catch (err) {
      alert(`failed to start hls ${err}`);
    }
  };

  const stopHLSStreaming = async () => {
    try {
      await hmsActions.stopHLSStreaming();
    } catch (err) {
      alert(`failed to stop hls ${err}`);
    }
  };
  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  };

  const leaveStream = async () => {
    try {
      hmsActions.leave();
      console.log("Leave Success");
    } catch (error) {
      console.log("Leave Error: ", error);
    }
  };
  return (
    <div className="controls">
      {localPeer.roleName === "broadcaster" ? (
        <>
          <IconButton onClick={toggleAudio}>
            {audioEnabled ? <MicNoneOutlined /> : <MicOffOutlined />}
          </IconButton>
          <IconButton onClick={toggleVideo}>
            {videoEnabled ? <VideocamOutlined /> : <VideocamOffOutlined />}
          </IconButton>
          <Button
            variant="contained"
            disableElevation
            className="leave"
            onClick={leaveStream}
          >
            <LogoutOutlined /> Leave Room
          </Button>
          {/* {hlsState.running ? (
            <Button
              variant="contained"
              disableElevation
              className="leave"
              onClick={stopHLSStreaming}
            >
              <StopCircleOutlined /> Stop Streaming
            </Button>
          ) : (
            <Button
              variant="contained"
              disableElevation
              onClick={startHLSStreaming}
            >
              <PodcastsOutlined /> Go Live
            </Button>
          )} */}
        </>
      ) : (
        <Button
          variant="contained"
          disableElevation
          className="leave"
          onClick={stopHLSStreaming}
        >
          <LogoutOutlined /> Leave Room
        </Button>
      )}
    </div>
  );
}

export default Controls;
