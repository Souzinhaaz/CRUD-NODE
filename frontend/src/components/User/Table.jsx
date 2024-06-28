import React from "react";

const UserTable = ({ users, handleEdit, handleDelete }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto">
  <table className="min-w-full bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b dark:border-gray-600 text-left">ID</th>
        <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Nome</th>
        <th className="py-2 px-4 border-b dark:border-gray-600 text-left">E-mail</th>
        <th className="py-2 px-4 border-b dark:border-gray-600 text-center">Telefone</th>
        <th className="py-2 px-4 border-b dark:border-gray-600 text-center">Ações</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="text-sm md:text-base">
          <td className="py-2 px-4 border-b dark:border-gray-600 text-left">{index + 1}</td>
          <td className="py-2 px-4 border-b dark:border-gray-600 text-left">{user.name}</td>
          <td className="py-2 px-4 border-b dark:border-gray-600 text-left">{user.email}</td>
          <td className="py-2 px-4 border-b dark:border-gray-600 text-center">{user.telephone}</td>
          <td className="py-2 px-4 border-b dark:border-gray-600 text-center">
            <button className="bg-yellow-500 text-white p-1 rounded mr-2" onClick={() => handleEdit(user)}>Editar</button>
            <button className="bg-red-500 text-white p-1 rounded" onClick={() => handleDelete(user)}>Excluir</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default UserTable;