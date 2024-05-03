import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { LiaPuzzlePieceSolid } from 'react-icons/lia'
import { Button } from './button'

export const ButtonsDemo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group fixed right-4 top-4 flex gap-2 rounded-full border-2 border-zinc-300 bg-zinc-700 p-2 text-white transition-all delay-1000">
          <LiaPuzzlePieceSolid size={20} />
          <span className="hidden transition-all group-hover:block">
            Interaja comigo
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
        <Dialog.Content asChild>
          <motion.div
            className="fixed bottom-0 right-0 top-0 w-fit max-w-[406px] bg-violet-950 px-11 py-28"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <Dialog.Title className="mb-2 font-inter text-[32px] font-bold leading-none">
              Teste os botões
            </Dialog.Title>
            <Dialog.Description className="mb-16 text-lg opacity-65">
              Interaja com os botões e observe a mudança de aparência e de
              cursores
            </Dialog.Description>

            <div className="flex w-full flex-col gap-8">
              <Button>Interaja comigo</Button>
              <Button variant="secondary" disabled>
                Interaja comigo
              </Button>
              <Button variant="tertiary" state="movable">
                Interaja comigo
              </Button>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
