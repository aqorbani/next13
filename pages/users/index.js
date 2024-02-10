import Link from "next/link";

const users = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
];

export default function Users() {
  return (
    <>
      <h2>Users List</h2>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`/users/${item.id}`}>user {item.name}</Link>
        </div>
      ))}
    </>
  );
}
