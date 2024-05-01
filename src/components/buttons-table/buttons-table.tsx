import { TableHeader } from './table-header'
import { TableCellLeft } from './table-cell-left'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { Button } from '../button'
import { CursorDefault } from '../../assets/icons/cursor-default'
import { CursorNotAllowed } from '../../assets/icons/cursor-not-allowed'
import { CursorLoading } from '../../assets/icons/cursor-loading'
import { CursorMove } from '../../assets/icons/cursor-move'

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
        <tbody className="[&_button]:pointer-events-none">
          <TableRow className="[&>td]:pt-8">
            <TableCellLeft>Default</TableCellLeft>
            <TableCell>
              <Button>Default Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary">Default Secondary</Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary">Default Tertiary</Button>
            </TableCell>
            <TableCell>
              <CursorDefault className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Hover</TableCellLeft>
            <TableCell>
              <Button state="hover">Hover Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary" state="hover">
                Hover Secondary
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary">Hover Tertiary</Button>
            </TableCell>
            <TableCell>
              <CursorDefault className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Focus</TableCellLeft>
            <TableCell>
              <Button state="focus">Focus Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary" state="focus">
                Focus Secondary
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary" state="focus">
                Focus Tertiary
              </Button>
            </TableCell>
            <TableCell>
              <CursorDefault className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Disabled</TableCellLeft>
            <TableCell>
              <Button disabled>Disabled Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary" disabled>
                Disabled Secondary
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary" disabled>
                Disabled Tertiary
              </Button>
            </TableCell>
            <TableCell>
              <CursorNotAllowed className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Loading</TableCellLeft>
            <TableCell>
              <Button state="loading">Loading Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary" state="loading">
                Loading Secondary
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary" state="loading">
                Loading Tertiary
              </Button>
            </TableCell>
            <TableCell>
              <CursorLoading className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>

          <TableRow className="[&>td]:pb-8">
            <TableCellLeft>Movable</TableCellLeft>
            <TableCell>
              <Button state="movable">Movable Primary</Button>
            </TableCell>
            <TableCell>
              <Button variant="secondary" state="movable">
                Movable Secondary
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="tertiary" state="movable">
                Movable Tertiary
              </Button>
            </TableCell>
            <TableCell>
              <CursorMove className="mx-auto" width={20} height={20} />
            </TableCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  )
}
