import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'
import { RxCursorArrow } from 'react-icons/rx'
import { TableHeader } from './table-header'
import { TableCellLeft } from './table-cell-left'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { Button } from '../button'

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
          <TableRow className="[&>td]:pt-8">
            <TableCellLeft>Default</TableCellLeft>
            <TableCell>
              <Button>Default Primary</Button>
            </TableCell>
            <TableCell>
              <Button>Default Secondary</Button>
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
              <Button state="hover">Hover Primary</Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Focus</TableCellLeft>
            <TableCell>
              <Button state="focus">Focus Primary</Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Disabled</TableCellLeft>
            <TableCell>
              <Button disabled>Disabled Primary</Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Loading</TableCellLeft>
            <TableCell>
              <Button state="loading">
                <AiOutlineLoading3Quarters size={16} />
                Loading Primary
              </Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow className="[&>td]:pb-8">
            <TableCellLeft>Movable</TableCellLeft>
            <TableCell>
              <Button state="movable">
                <IoMenu size={16} />
                Movable Primary
              </Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  )
}
