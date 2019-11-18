import React, { RefObject } from "react";

const videoStyle = {
    width: "0px",
    height: "0px"
}

export type NoSleepState = {
    isPlaying: boolean
}

export type NoSleepProps = {
    children?: JSX.Element | JSX.Element[],
    dummyVid: string
}
  
class NoSleep extends React.Component<NoSleepProps, NoSleepState>{
    state = {isPlaying: false};
    videoRef: RefObject<HTMLVideoElement> = React.createRef();

    componentDidMount() {
        console.log("Enabling Sleep Lock");
        this.setState({isPlaying: true});
    }

    componentDidUpdate() {
        if(this.videoRef.current) {
            const video = this.videoRef.current;
            video.addEventListener('timeupdate', () => {
                if(video.currentTime > 0.5) {
                video.currentTime = Math.random();
                }
            });
            video.play();
        }
    }

    render() {
        const { children, dummyVid } = this.props;
        return (
            <>
                {children}
                <video style={videoStyle} ref={this.videoRef} title="No Sleep" muted playsInline>
                    <source src={dummyVid} type="video/mp4"/>
                </video>
            </>
        );
    }
}

export default NoSleep;