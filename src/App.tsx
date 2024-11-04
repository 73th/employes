import EmployeeCard from './components/EmployeeCard';

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};


function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  return (
    <div className='App'>
      <EmployeeCard employee={sampleEmployee} />
    </div>
  );
}

export default App
