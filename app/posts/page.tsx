import { Card } from "@nextui-org/card"
import { Link } from "@nextui-org/link"

export default async function Posts() {

  fetch('http://localhost:3000/api/posts')
    .then((res) => res.json())
    .then((data) => console.log(data))

  return (
    <div className="grid grid-cols-2 gap-3">
      <Card as={Link} href={'/' + 1} isPressable className="p-4 flex flex-col items-start gap-y-3">
        <span className="text-lg font-semibold text-left">Интерфейс</span>
        <span className="text-slate-400 text-left">Интерфейс предоставляет механизм для определения того, какие свойства и  методы должен реализовывать объект, и, следовательно, является способом определения пользовательского типа.</span>
      </Card>
    </div>
  )
}
