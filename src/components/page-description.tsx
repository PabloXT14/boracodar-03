import { motion } from 'framer-motion'

export const PageDescription = () => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div className="flex flex-col gap-2">
      <motion.h1
        className="text-[32px] font-bold leading-none"
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        Tipos de botão
      </motion.h1>
      <motion.p
        className="text-lg font-normal opacity-65"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Dentro de um layout, botões servem para destacar ações importantes a
        serem tomadas. <br />
        Acompanhe abaixo um exemplo de tipos e propriedades.
      </motion.p>
    </div>
  )
}
