import React from "react";

const Form = ({ formData, handleChange, handleSubmit, isEditing, handleCancelEdit, formatDate }) => {
  return (
    <form className="mb-4" onSubmit={handleSubmit} method="POST">
      <div className="mb-2">
        <label className="block text-gray-700 dark:text-gray-300">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 dark:text-gray-300">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 dark:text-gray-300">Telefone</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Data de Nascimento</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formatDate(formData.birthDate)}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="w-full flex justify-between">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{isEditing ? "Atualizar" : "Criar"}</button>
        {isEditing && <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancelEdit}>Cancelar</button>}
      </div>
    </form>
  );
};

export default Form;