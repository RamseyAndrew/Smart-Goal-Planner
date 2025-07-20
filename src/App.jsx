import { useEffect, useState } from 'react'


function App() {
  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState({
    name: "",
    savedAmount: "",
    targetAmount: ""
  })
  

  useEffect(() =>{
    fetch('http://localhost:3000/goals')
     .then(res=> res.json())
     .then(data => setGoals(data))
    .catch( err => console.error('Error fetching your goals ❌', err))
    }, [])


return(
  <div className='App'>
<h1>Smart Goal Planner 📓 🤓</h1>
<form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Goal Name"
    value={newGoal.name}
    onChange={handleChange}
  />
  <input
    type="number"
    name="savedAmount"
    placeholder="Saved"
    value={newGoal.savedAmount}
    onChange={handleChange}
  />
  <input
    type="number"
    name="targetAmount"
    placeholder="Target"
    value={newGoal.targetAmount}
    onChange={handleChange}
  />
  <button type="submit">Add Goal</button>
</form>

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
