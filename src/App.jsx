import { gql, useQuery } from '@apollo/client';

const getUsersList = gql`
  query getUsers {
    getUsers {
      id
      name
      age
      idMerried
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(getUsersList);

  if (loading) return <p>Data loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      {data?.getUsers?.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
