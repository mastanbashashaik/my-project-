import Link from "next/link"

function page() {
  return (
    <div>
    <h1>page 1</h1>
    <h1>page 2</h1>
    <h1>page 3</h1>
    <h1>page 4</h1>
    <Link href="/product">product</Link>
    </div>
  )
}

export default page