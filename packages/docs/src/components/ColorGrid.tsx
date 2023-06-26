import { getContrast } from "polished"

import { colors } from '@buscamilhas-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => {
    return (
      <div key={key} style={{ background: value, padding: '2rem'}}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(value, '#fff') < 3.5 ? '#000' : '#FFF' }}>
          <strong>${key}</strong>
        </div>
      </div>
    )
  })
}
