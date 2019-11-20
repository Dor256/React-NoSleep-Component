import React, { RefObject } from "react";

const MP4_VIDEO = `${process.env.PUBLIC_URL}/dummyVid.mp4`;
const MOV_VIDEO = `${process.env.PUBLIC_URL}/dummyVid.MOV`;
const INTERVAL = 5000;
const REFRESH_TIME = 0.5;

const videoStyle = {
    width: "0px",
    height: "0px"
}

export type NoSleepProps = {
    children?: JSX.Element | JSX.Element[]
}
  
class NoSleep extends React.Component<NoSleepProps>{
    videoRef: RefObject<HTMLVideoElement> = React.createRef();
    interval: NodeJS.Timeout | null = null;

    componentDidMount() {
        console.log("Enabling Sleep Lock");
        if(this.videoRef.current) {
            const video = this.videoRef.current;
            this.interval = setInterval(() => {
                if(video.currentTime > REFRESH_TIME) {
                    video.currentTime = Math.random();
                }
            }, INTERVAL);
        }
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { children } = this.props;
        return (
            <>
                {children}
                <video autoPlay style={videoStyle} ref={this.videoRef} title="No Sleep" muted playsInline>
                    <source src={MP4_VIDEO} type="video/mp4"/>
                    <source src={MOV_VIDEO} type="video/mp4"/>
                </video>
            </>
        );
    }
}

export default NoSleep;
