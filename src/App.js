import { useState, useEffect } from 'react'
import Header from './components/Header'
import ColorPanel from './components/ColorPanel'
import { lightScale } from './utils'

function App() {
  const [primary1, setPrimary1] = useState('#4C73DD')
  const [primary1Scale, setPrimary1Scale] = useState(lightScale(primary1))
  useEffect(() => {
    setPrimary1Scale(lightScale(primary1))
  }, [primary1, primary1Scale])

  const [primary, setPrimary] = useState('#1E3288')
  const [primaryScale, setPrimaryScale] = useState(lightScale(primary))
  useEffect(() => {
    setPrimaryScale(lightScale(primary))
  }, [primary, primaryScale])

  const [primary2, setPrimary2] = useState('#0D0A33')
  const [primary2Scale, setPrimary2Scale] = useState(lightScale(primary2))
  useEffect(() => {
    setPrimary2Scale(lightScale(primary2))
  }, [primary2, primary2Scale])

  const [secondary1, setSecondary1] = useState('#3fde83')
  const [secondary1Scale, setSecondary1Scale] = useState(lightScale(secondary1))
  useEffect(() => {
    setSecondary1Scale(lightScale(secondary1))
  }, [secondary1, secondary1Scale])

  const [secondary, setSecondary] = useState('#047C4E')
  const [secondaryScale, setSecondaryScale] = useState(lightScale(secondary))
  useEffect(() => {
    setSecondaryScale(lightScale(secondary))
  }, [secondary, secondaryScale])

  const [secondary2, setSecondary2] = useState('#153224')
  const [secondary2Scale, setSecondary2Scale] = useState(lightScale(secondary2))
  useEffect(() => {
    setSecondary2Scale(lightScale(secondary2))
  }, [secondary2, secondary2Scale])

  const [clair, setClair] = useState('#FAF5F5')
  const [clairScale, setClairScale] = useState(lightScale(clair))
  useEffect(() => {
    setClairScale(lightScale(clair))
  }, [clair, clairScale])

  const [clair2, setClair2] = useState('#D1CECE')
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

  // function resetColors() {}

  useEffect(() => {
    document.title = 'Nanosite ColorPickers'
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="colorsPanel">
        <div className="colorPanelGroup colorPanelGroup_Big">
          <p className="colorPanelGroup_name">Primaires</p>
          <div className="colorPanelGroup_container">
            <ColorPanel
              colorHex={primary1}
              colorScale={primary1Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary1)}
              lowLimit={10}
              highLimit={50}
            />
            <ColorPanel
              colorHex={primary}
              colorScale={primaryScale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary)}
              lowLimit={10}
              highLimit={50}
            />
            <ColorPanel
              colorHex={primary2}
              colorScale={primary2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setPrimary2)}
              lowLimit={10}
              highLimit={50}
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
              lowLimit={10}
              highLimit={50}
            />
            <ColorPanel
              colorHex={secondary}
              colorScale={secondaryScale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setSecondary)}
              lowLimit={10}
              highLimit={50}
            />
            <ColorPanel
              colorHex={secondary2}
              colorScale={secondary2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setSecondary2)}
              lowLimit={10}
              highLimit={50}
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
              lowLimit={10}
              highLimit={50}
            />
            <ColorPanel
              colorHex={clair2}
              colorScale={clair2Scale}
              onClickFunc={(event) => openPicker(event)}
              onChangeFunc={(event) => changeColor(event, setClair2)}
              lowLimit={10}
              highLimit={50}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
