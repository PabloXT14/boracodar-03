import { TableHeader } from './table-header'
import { TableCellLeft } from './table-cell-left'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { Button } from '../button'
import { CursorDefault } from '../../assets/icons/cursor-default'
import { CursorNotAllowed } from '../../assets/icons/cursor-not-allowed'
import { CursorLoading } from '../../assets/icons/cursor-loading'
import { CursorMove } from '../../assets/icons/cursor-move'
import { motion } from 'framer-motion'

export const ButtonsTable = () => {
  const buttonAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  const tableTransitionDuration = 0.5
  const buttonDefaultDelay = tableTransitionDuration
  const tableLinesDelay = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]

  return (
    <motion.div
      className="overflow-hidden rounded-lg border-b-[6px] border-r-[7px] border-b-violet-900 border-r-violet-900"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: tableTransitionDuration }}
    >
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
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[0],
                }}
              >
                <Button>Default Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[0],
                }}
              >
                <Button variant="secondary">Default Secondary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[0],
                }}
              >
                <Button variant="tertiary">Default Tertiary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[0],
                }}
              >
                <CursorDefault className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Hover</TableCellLeft>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[1],
                }}
              >
                <Button state="hover">Hover Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[1],
                }}
              >
                <Button variant="secondary" state="hover">
                  Hover Secondary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[1],
                }}
              >
                <Button variant="tertiary">Hover Tertiary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[1],
                }}
              >
                <CursorDefault className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Focus</TableCellLeft>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[2],
                }}
              >
                <Button state="focus">Focus Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[2],
                }}
              >
                <Button variant="secondary" state="focus">
                  Focus Secondary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[2],
                }}
              >
                <Button variant="tertiary" state="focus">
                  Focus Tertiary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[2],
                }}
              >
                <CursorDefault className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Disabled</TableCellLeft>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[3],
                }}
              >
                <Button disabled>Disabled Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[3],
                }}
              >
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[3],
                }}
              >
                <Button variant="tertiary" disabled>
                  Disabled Tertiary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[3],
                }}
              >
                <CursorNotAllowed className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCellLeft>Loading</TableCellLeft>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[4],
                }}
              >
                <Button state="loading">Loading Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[4],
                }}
              >
                <Button variant="secondary" state="loading">
                  Loading Secondary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[4],
                }}
              >
                <Button variant="tertiary" state="loading">
                  Loading Tertiary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[4],
                }}
              >
                <CursorLoading className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>

          <TableRow className="[&>td]:pb-8">
            <TableCellLeft>Movable</TableCellLeft>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[5],
                }}
              >
                <Button state="movable">Movable Primary</Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[5],
                }}
              >
                <Button variant="secondary" state="movable">
                  Movable Secondary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[5],
                }}
              >
                <Button variant="tertiary" state="movable">
                  Movable Tertiary
                </Button>
              </motion.div>
            </TableCell>
            <TableCell>
              <motion.div
                {...buttonAnimation}
                transition={{
                  duration: 0.2,
                  delay: buttonDefaultDelay + tableLinesDelay[5],
                }}
              >
                <CursorMove className="mx-auto" width={20} height={20} />
              </motion.div>
            </TableCell>
          </TableRow>
        </tbody>
      </table>
    </motion.div>
  )
}
