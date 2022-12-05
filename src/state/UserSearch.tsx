import { useState } from "react";
const users = [
  { name: "John", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<undefined | { name: string; age: number }>();
  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    if (foundUser) setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user && user?.name}</div>
      <div>{user && user?.age}</div>
    </div>
  );
};

export default UserSearch;
