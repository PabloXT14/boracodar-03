import { RxCursorArrow } from 'react-icons/rx'

export const ButtonsTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Botão Primário</th>
            <th>Botão Secundário</th>
            <th>Botão Terciário</th>
            <th>Cursor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <button>Default Primary</button>
            </td>
            <td>
              <button>Default Secondary</button>
            </td>
            <td>
              <button>Default Tertiary</button>
            </td>
            <td>
              <RxCursorArrow />
            </td>
          </tr>

          <tr>
            <td>Hover</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Focus</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Disabled</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Loading</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Movable</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
