import { useEffect, useRef, useState } from "react";
import { User } from "./components/User";
import { api } from "./services/api";
import PullToRefresh from "react-simple-pull-to-refresh";

import GlobalStyles from './GlobalStyles';
import { UserList } from "./styles";

type IUser = {
  name: {
    first: string;
  };
  phone: string;
  picture: {
    medium: string;
  };
  id: {
    value: string;
  };
};

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef<HTMLDivElement>(null);

  async function handleRefreshPage() {
    setUsers([]);
    if (page === 1) {
      getNewUsers(true);
    }

    setPage(1);

    return;
  }

  async function getNewUsers(refresh = false) {
    const { data } = await api.get(`/?results=10&page=${page}`);
    const newUsers: IUser[] = data.results;

    if (refresh) {
      setUsers(newUsers);
    } else {
      setUsers([...users, ...newUsers]);
    }

    if (users) {
      setIsLoading(false);
    }
  }

  function handleScroll() {
    if (isLoading) return;

    if (container.current) {
      let currentScroll = window.innerHeight + window.scrollY;
      if (container.current.offsetHeight < currentScroll) {
        setPage(page + 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (page !== 1) {
      setIsLoading(true);
    }
    getNewUsers();
  }, [page]);

  return (
    <div className="App" ref={container}>
      <UserList>
        <PullToRefresh onRefresh={handleRefreshPage}>
          <ul>
            {users?.map((user) => (
              <User
                key={`${user.phone}-${user.id.value}`} //id value is possible null
                name={user.name.first}
                phone={user.phone}
                thumbnail={user.picture.medium}
              />
            ))}
            {isLoading && <h1>Carregando...</h1>}
          </ul>
        </PullToRefresh>
      </UserList>
      <GlobalStyles />
    </div>
  );
}

export default App;
