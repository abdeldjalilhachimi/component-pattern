import Card from "./Components/Card"


function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
     <Card>
      <Card.Header title="React Design Patterns: Compound Component Pattern" />
      <Card.Content content="How to avoid prop drilling and write elegant components with implicit state sharing." />
      <Card.Footer label="Read More" />
     </Card>
    </div>
  )
}

export default App
