import { checkCurrentUserIsAuth, getUserList } from './apis/user';

function App() {
  const showUserListAndIsAuth = async () => {
    const data = await getUserList();
    const authUser = await checkCurrentUserIsAuth();

    console.log(data);
    console.log(authUser);
  };

  showUserListAndIsAuth();
  return (
    <div className='App'>
      <button>hello </button>
    </div>
  );
}

export default App;
