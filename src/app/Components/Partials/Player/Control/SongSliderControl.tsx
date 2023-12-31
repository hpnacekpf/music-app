import React from "react"
import Slider from "../Slider"
import { useSelector } from "react-redux";

const SongSliderControl: React.FC<{auRef: HTMLAudioElement | null | undefined}>  = ({ auRef }) => {

  const currentTime = useSelector((state: any) => state.audio.currentTime)
  const duration = useSelector((state: any) => state.audio.duration)

  return(
    <Slider
      setWidth={"100%"}
      setHeight={"2px"}
      percentSlider={(currentTime/duration)*100}
      toogleTooltip={true}
      currentTimeSongTooltip={currentTime}
      getPercentSlider={(value: number) => {
        if(auRef) {
          auRef.currentTime = (value / 100) * auRef.duration
        }
      }}
    />
  )
}

export default SongSliderControl
