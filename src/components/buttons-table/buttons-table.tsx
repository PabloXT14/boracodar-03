import { RxCursorArrow } from 'react-icons/rx'
import { TableHeader } from './table-header'
import { TableCellLeft } from './table-cell-left'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'

export const ButtonsTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border-b-[6px] border-r-[7px] border-b-violet-900 border-r-violet-900">
      <table className="w-full">
        <thead>
          <tr>
            <TableHeader className="w-[94px]"></TableHeader>
            <TableHeader>Botão Primário</TableHeader>
            <TableHeader>Botão Secundário</TableHeader>
            <TableHeader>Botão Terciário</TableHeader>
            <TableHeader>Cursor</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCellLeft>Default</TableCellLeft>
            <TableCell>
              <button className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium uppercase">
                Default Primary
              </button>
            </TableCell>
            <TableCell>
              <button>Default Secondary</button>
            </TableCell>
            <TableCell>
              <button>Default Tertiary</button>
            </TableCell>
            <TableCell>
              <RxCursorArrow className="mx-auto" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Hover</TableCellLeft>
            <TableCell>
              <button className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium uppercase">
                Default Primary
              </button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Focus</TableCellLeft>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Disabled</TableCellLeft>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Loading</TableCellLeft>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Movable</TableCellLeft>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  )
}
