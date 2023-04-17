import ColorPicker from './ColorPicker'
import ColorScale from './ColorScale'

function ColorPanel({
  colorHex,
  colorScale,
  onClickFunc,
  onChangeFunc,
  lowLimit,
  highLimit,
}) {
  return (
    <div className="colorPanel" style={{ backgroundColor: colorHex }}>
      <ColorPicker
        colorHex={colorHex}
        onClickFunc={onClickFunc}
        onChangeFunc={onChangeFunc}
      />
      <ColorScale
        colorHex={colorHex}
        colorScale={colorScale}
        lowLimit={lowLimit}
        highLimit={highLimit}
      />
    </div>
  )
}
export default ColorPanel
