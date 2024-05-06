import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { LiaPuzzlePieceSolid } from 'react-icons/lia'
import { IoClose } from 'react-icons/io5'
import { Button } from './button'

export const ButtonsDemo = () => {
  const [open, setOpen] = useState(false)

  const buttonAnimation = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  }

  const titleAnimation = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  }

  const descriptionAnimation = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 0.65, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <motion.button className="group fixed right-4 top-4 flex gap-2 rounded-full bg-zinc-700 p-2 text-white transition-all hover:px-4 hover:py-2">
          <LiaPuzzlePieceSolid size={24} />
          <motion.span
            className="hidden transition-all group-hover:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Interaja comigo
          </motion.span>
        </motion.button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay
              className="fixed inset-0 bg-black opacity-60"
              forceMount
            />
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed bottom-0 right-0 top-0 w-fit max-w-[406px] bg-violet-950 px-10 py-28 lg:px-11"
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
              >
                <Dialog.Close asChild>
                  <motion.button className="fixed right-6 top-6 flex gap-2 text-white lg:right-11 lg:top-11">
                    <IoClose size={24} />
                  </motion.button>
                </Dialog.Close>
                <Dialog.Title asChild>
                  <motion.h2
                    className="mb-2 font-inter text-3xl font-bold leading-none lg:text-[32px]"
                    {...titleAnimation}
                    transition={{ duration: 0.5 }}
                  >
                    Teste os botões
                  </motion.h2>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <motion.p
                    className="mb-10 text-base opacity-65 lg:mb-16 lg:text-lg"
                    {...descriptionAnimation}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Interaja com os botões e observe a mudança de aparência e de
                    cursores
                  </motion.p>
                </Dialog.Description>

                <div className="flex w-full flex-col gap-8">
                  <motion.div
                    {...buttonAnimation}
                    transition={{ duration: 0.2, delay: 0.2 + 0.1 }}
                  >
                    <Button className="w-full">Interaja comigo</Button>
                  </motion.div>
                  <motion.div
                    {...buttonAnimation}
                    transition={{ duration: 0.2, delay: 0.2 + 0.2 }}
                  >
                    <Button className="w-full" variant="secondary" disabled>
                      Interaja comigo
                    </Button>
                  </motion.div>
                  <motion.div
                    {...buttonAnimation}
                    transition={{ duration: 0.2, delay: 0.2 + 0.3 }}
                  >
                    <Button
                      className="w-full"
                      variant="tertiary"
                      state="movable"
                    >
                      Interaja comigo
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
