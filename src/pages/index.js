import TodoList from '../Components/TodoList';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#00BFFF' }}>
      <TodoList />
    </div>
  );
};

export default Home;