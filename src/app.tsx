import { ButtonsDemo } from './components/buttons-demo'
import { ButtonsTable } from './components/buttons-table'
import { PageDescription } from './components/page-description'

export function App() {
  return (
    <main className="mx-20 my-28 flex w-auto flex-col">
      <PageDescription />
      <ButtonsTable />
      <ButtonsDemo />
    </main>
  )
}
