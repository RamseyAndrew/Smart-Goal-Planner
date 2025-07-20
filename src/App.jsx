import { useEffect, useState } from 'react'


function App() {
  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState

  useEffect(() =>{
    fetch('http://localhost:3000/goals')
     .then(res=> res.json())
     .then(data => setGoals(data))
    .catch( err => console.error('Error fetching your goals ❌', err))
    }, [])


return(
  <div className='App'>
<h1>Smart Goal Planner 📓 🤓</h1>
<ul>
  {goals.map(goal =>(
    <li key={goal.id}>
      {goal.name} -Saved: ${goal.savedAmount}/${goal.targetAmount}
    </li>
  ))}
</ul>
  </div>
)
} 

export default App
