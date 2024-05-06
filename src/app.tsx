import { ButtonsDemo } from './components/buttons-demo'
import { ButtonsTable } from './components/buttons-table/buttons-table'
import { PageDescription } from './components/page-description'

export function App() {
  return (
    <main className="mx-10 my-28 flex w-auto flex-col gap-10 lg:mx-20 lg:gap-16">
      <PageDescription />
      <ButtonsTable />
      <ButtonsDemo />
    </main>
  )
}
