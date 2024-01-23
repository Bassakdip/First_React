import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [{
    tittle: 'news papper',
    amount: '5',
    date: new Date(2020, 4, 11)
  },
  {
    tittle: 'car insurence',
    amount: '5000',
    date: new Date(2021, 1, 1)
  },
  {
    tittle: 'tv',
    amount: '10000',
    date: new Date(2022, 4, 10)
  },
  {
    tittle: 'book',
    amount: '300',
    date: new Date(2022, 4, 11)
  }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem tittle={expenses[0].tittle} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem tittle={expenses[1].tittle} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem tittle={expenses[2].tittle} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem tittle={expenses[3].tittle} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
