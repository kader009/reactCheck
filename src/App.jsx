import { gql, useQuery } from '@apollo/client';

const getUsersList = gql`
  query getUsers {
    getUsers {
      id
      name
      age
      isMerried
    }
  }
`;

const getUserById = gql`
  query getUsers($id: ID!) {
    getUserById(id: $id) {
      id
      name
      age
      isMerried
    }
  }
`;

function App() {
  const {
    data: UserData,
    error: UserError,
    loading: UserLoading,
  } = useQuery(getUsersList);
  const { data, error, loading } = useQuery(getUserById, {
    variables: { id: '2' },
  });

  if (loading) return <p>Data loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="font-bold text-blue-600 mb-4">Users list</h1>

      <br />
      <div>
        <p>{data?.getUserById?.id}</p>
        <p>{data?.getUserById?.name}</p>
      </div>
      <br />
      {UserData?.getUsers?.map((user) => (
        <div key={user.id} className="flex flex-col gap-2">
          <span>Name: {user.name}</span>
          <span>Age: {user.age}</span>
          <span>Merried: {user.isMerried ? 'Yes' : 'No'}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
