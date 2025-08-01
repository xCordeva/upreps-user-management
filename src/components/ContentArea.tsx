import UsersContainer from "./UsersContainer";

export default function ContentArea() {
  return (
    <div className="w-full mx-auto bg-white rounded-lg drop-shadow-lg p-4">
      <h2 className="text-3xl font-bold">User Management</h2>
      <p className="text-gray-500">
        View, edit, and organize user accounts here.
      </p>
      <UsersContainer />
    </div>
  );
}
