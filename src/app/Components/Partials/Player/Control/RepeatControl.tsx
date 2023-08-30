import React from "react"
import IconRepeat from "../../Icons/Repeat"
import { setLoop } from "../../../../Store/Audio/audioSlice.ts"
import { useDispatch, useSelector } from "react-redux";

const RepeatControl: React.FC = () => {

  const isLoop = useSelector((state: any) => state.audio.isLoop)
  const dispath = useDispatch()

  const handleRepeat = () => {
    if(isLoop) {
      dispath(setLoop(false))
    } else {
      dispath(setLoop(true))
    }
  }

  return(
    <div
      onClick={handleRepeat}
    >
      {
        isLoop
        ?
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <IconRepeat setColor="var(--color-primary)" setWidth="16px" setHeight="16px" />
        </button>
        :
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <IconRepeat setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
        </button>
      }
    </div>
  )
}

export default RepeatControl
