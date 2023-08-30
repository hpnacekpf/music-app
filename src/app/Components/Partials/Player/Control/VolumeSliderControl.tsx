import React from "react"
import Slider from "../Slider"
import { setVolume } from "../../../../Store/Audio/audioSlice.ts"
import { useDispatch, useSelector } from "react-redux";

const VolumeSliderControl: React.FC<{auRef: HTMLAudioElement | null | undefined}> = ({ auRef }) => {

  const volume:number | null = useSelector((state: any) => state.audio.volume)
  const dispath = useDispatch()

  return(
    <Slider
      setWidth={"84px"}
      setHeight={"4px"}
      percentSlider={Number(volume) * 100}
      toogleTooltip={false}
      getPercentSlider={(value: number) => {
        if(auRef) {
          localStorage.setItem("volume", String(value / 100))
          dispath(setVolume(
            value / 100
          ))
          auRef.volume = value / 100
        }
      }}
    />
  )
}

export default VolumeSliderControl
