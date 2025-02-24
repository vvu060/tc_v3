import React, {useEffect, useRef} from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import Lottie from "lottie-react"

type GraphContainerProps = {
  metricTitle: string
  metricData: number
  metricDesc: string
  visual: any
  duration?: number
  delay?: number
}

const GraphContainer = ({metricTitle, metricData, metricDesc, visual, delay, duration}: GraphContainerProps) => {
  const [playAnimation, setPlayAnimation] = React.useState(false)
  const lottieRef = useRef()

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "loop" as "loop",
        frames: [0],
      },
    ],
  }

  useEffect(() => {
    setTimeout(() => {
      setPlayAnimation(true)
      ;(lottieRef.current as any)?.pause()
    }, delay)
  }, [])

  return (
    <div
      style={{
        border: "1px solid #2C2C2C",
      }}
      className="h-[368px] lg:h-[400px] w-[95%] sm:w-[680px] rounded-3xl sm:rounded-[32px] flex flex-col relative"
    >
      <div className="flex flex-col px-6 py-4 lg:px-12 lg:py-8 z-10">
        <span className="text-content-small sm:text-content-medium text-tailCall-light-100">{metricTitle}</span>
        {metricData && (
          <span className="text-title-medium sm:text-title-large text-tailCall-light-100">
            <VisibilitySensor partialVisibility offset={{bottom: 200}}>
              {({isVisible}) => (
                <div style={{height: 100}}>
                  {isVisible ? (
                    <CountUp start={2000} end={metricData} decimals={2} duration={duration} delay={delay} />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </span>
        )}
        <span className="text-content-tiny sm:text-content-small text-tailCall-light-400">{metricDesc}</span>
      </div>

      <div className="absolute right-1 bottom-1">
        <Lottie lottieRef={lottieRef} animationData={visual} interactivity={interactivity} loop={false} />
      </div>
    </div>
  )
}

export default GraphContainer
