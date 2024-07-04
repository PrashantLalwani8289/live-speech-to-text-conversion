import React, { useState } from 'react'
import DictaphoneWidgetA from './Dictaphone/DictaphoneWidgetA'
import DictaphoneWidgetB from './Dictaphone/DictaphoneWidgetA'
import SpeechRecognition from 'react-speech-recognition'

const Dictaphone =  () => {
  const [showFirstWidget, setShowFirstWidget] = useState(true)
  const toggleShowFirstWidget = () => setShowFirstWidget(!showFirstWidget)

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  return (
    <div>
      {showFirstWidget && <DictaphoneWidgetA />}
      <DictaphoneWidgetB />
      <button onClick={listenOnce}>Listen once</button>
      <button onClick={listenContinuously}>Listen continuously</button>
      <button onClick={listenContinuouslyInChinese}>Listen continuously (Chinese)</button>
      <button onClick={toggleShowFirstWidget}>Toggle first widget</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={SpeechRecognition.removePolyfill}>Remove polyfill</button>
    </div>
  )
}

export default Dictaphone;