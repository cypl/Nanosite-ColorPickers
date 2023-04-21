import { useState, useEffect } from 'react'
import Header from './components/Header'
import ColorPanel from './components/ColorPanel'
import { lightScale } from './utils'
import { colorStarter } from './utils/colorStarter'
import { lightnessArea } from './utils/lightnessArea'

function App() {
  const [primary1, setPrimary1] = useState(colorStarter.primary1)
  const [primary1Scale, setPrimary1Scale] = useState(lightScale(primary1))
  useEffect(() => {
    setPrimary1Scale(lightScale(primary1))
  }, [primary1, primary1Scale])

  const [primary, setPrimary] = useState(colorStarter.primary)
  const [primaryScale, setPrimaryScale] = useState(lightScale(primary))
  useEffect(() => {
    setPrimaryScale(lightScale(primary))
  }, [primary, primaryScale])

  const [primary2, setPrimary2] = useState(colorStarter.primary2)
  const [primary2Scale, setPrimary2Scale] = useState(lightScale(primary2))
  useEffect(() => {
    setPrimary2Scale(lightScale(primary2))
  }, [primary2, primary2Scale])

  const [secondary1, setSecondary1] = useState(colorStarter.secondary1)
  const [secondary1Scale, setSecondary1Scale] = useState(lightScale(secondary1))
  useEffect(() => {
    setSecondary1Scale(lightScale(secondary1))
  }, [secondary1, secondary1Scale])

  const [secondary, setSecondary] = useState(colorStarter.secondary)
  const [secondaryScale, setSecondaryScale] = useState(lightScale(secondary))
  useEffect(() => {
    setSecondaryScale(lightScale(secondary))
  }, [secondary, secondaryScale])

  const [secondary2, setSecondary2] = useState(colorStarter.secondary2)
  const [secondary2Scale, setSecondary2Scale] = useState(lightScale(secondary2))
  useEffect(() => {
    setSecondary2Scale(lightScale(secondary2))
  }, [secondary2, secondary2Scale])

  const [clair, setClair] = useState(colorStarter.clair)
  const [clairScale, setClairScale] = useState(lightScale(clair))
  useEffect(() => {
    setClairScale(lightScale(clair))
  }, [clair, clairScale])

  const [clair2, setClair2] = useState(colorStarter.clair2)
  const [clair2Scale, setClair2Scale] = useState(lightScale(clair2))
  useEffect(() => {
    setClair2Scale(lightScale(clair2))
  }, [clair2, clair2Scale])

  function openPicker(event) {
    const colorInput = event.currentTarget.childNodes[1]
    colorInput.click()
  }
  function changeColor(event, setFunc) {
    setFunc(event.target.value)
  }

  function resetColors() {
    setPrimary1(colorStarter.primary1)
    setPrimary(colorStarter.primary)
    setPrimary2(colorStarter.primary2)
    setSecondary1(colorStarter.secondary1)
    setSecondary(colorStarter.secondary)
    setSecondary2(colorStarter.secondary2)
    setClair(colorStarter.clair)
    setClair2(colorStarter.clair2)
  }

  useEffect(() => {
    document.title = 'Nanosite ColorPickers'
  }, [])

  return (
    <div className="App">
      <Header resetColors={resetColors} />
      <section className="colorsPanel">
        <div className="colorPanelGroup colorPanelGroup_Big">
          <p className="colorPanelGroup_name">Primaires</p>
          <div className="colorPanelGroup_container">
            <ColorPanel
              colorHex={primary1}
              colorScale={primary1Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary1)}
              lowLimit={lightnessArea.find((c) => c.color === 'primary1').low}
              highLimit={lightnessArea.find((c) => c.color === 'primary1').up}
            />
            <ColorPanel
              colorHex={primary}
              colorScale={primaryScale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary)}
              lowLimit={lightnessArea.find((c) => c.color === 'primary').low}
              highLimit={lightnessArea.find((c) => c.color === 'primary').up}
            />
            <ColorPanel
              colorHex={primary2}
              colorScale={primary2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary2)}
              lowLimit={lightnessArea.find((c) => c.color === 'primary2').low}
              highLimit={lightnessArea.find((c) => c.color === 'primary2').up}
            />
          </div>
        </div>
        <div className="colorPanelGroup colorPanelGroup_Big">
          <p className="colorPanelGroup_name">Secondaires</p>
          <div className="colorPanelGroup_container">
            <ColorPanel
              colorHex={secondary1}
              colorScale={secondary1Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setSecondary1)}
              lowLimit={lightnessArea.find((c) => c.color === 'secondary1').low}
              highLimit={lightnessArea.find((c) => c.color === 'secondary1').up}
            />
            <ColorPanel
              colorHex={secondary}
              colorScale={secondaryScale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setSecondary)}
              lowLimit={lightnessArea.find((c) => c.color === 'secondary').low}
              highLimit={lightnessArea.find((c) => c.color === 'secondary').up}
            />
            <ColorPanel
              colorHex={secondary2}
              colorScale={secondary2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setSecondary2)}
              lowLimit={lightnessArea.find((c) => c.color === 'secondary2').low}
              highLimit={lightnessArea.find((c) => c.color === 'secondary2').up}
            />
          </div>
        </div>
        <div className="colorPanelGroup colorPanelGroup_Thin">
          <p className="colorPanelGroup_name">Claires</p>
          <div className="colorPanelGroup_container">
            <ColorPanel
              colorHex={clair}
              colorScale={clairScale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setClair)}
              lowLimit={lightnessArea.find((c) => c.color === 'clair').low}
              highLimit={lightnessArea.find((c) => c.color === 'clair').up}
            />
            <ColorPanel
              colorHex={clair2}
              colorScale={clair2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setClair2)}
              lowLimit={lightnessArea.find((c) => c.color === 'clair2').low}
              highLimit={lightnessArea.find((c) => c.color === 'clair2').up}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
