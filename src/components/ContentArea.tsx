import UsersContainer from "./UsersContainer";

export default function ContentArea() {
  return (
    <div className="w-full mx-auto bg-[#f2f2f2] md:bg-white rounded-lg md:drop-shadow-lg box-border md:p-4">
      <h2 className="text-3xl font-bold md:p-0 p-4">User Management</h2>
      <p className="text-gray-500 px-4 md:px-0">
        View, edit, and organize user accounts here.
      </p>
      <UsersContainer />
    </div>
  );
}
