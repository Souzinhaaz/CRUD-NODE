import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./services/APIService";
import { useState, useEffect } from "react";

import Form from "./components/User/Form";
import Table from "./components/User/Table";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    birthDate: "",
  });

  useEffect(() => {
    const response = getUsers();
    response
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Occurred some error: " + error);
      });
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "birthDate") {
      setFormData({
        ...formData,
        [name]: new Date(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      birthDate: formatDate(formData.birthDate),
    };

    if (editingUserId) {
      updateUser(editingUserId, formattedData)
        .then(() => {
          setUsers(
            users.map((user) =>
              user._id === editingUserId ? { ...user, ...formattedData } : user
            )
          );

          setFormData({
            name: "",
            email: "",
            telephone: "",
            birthDate: "",
          });
          setEditingUserId(null);
        })
        .catch((error) => {
          console.log("Occurred some error: " + error);
        });
    } else {
      createUser(formattedData)
        .then(() => {
          setUsers([...users, formattedData]);
          setFormData({
            name: "",
            email: "",
            telephone: "",
            birthDate: "",
          });
        })
        .catch((error) => {
          console.log("Occurred some error: " + error);
        });
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);

    getUserById(user._id)
      .then((data) => {
        setFormData(data); // Preenche o formulário com os dados do usuário
      })
      .catch((error) => {
        console.log("Occurred some error: " + error);
      });
  };

  const handleDelete = (user) => {
    const userId = user._id;
    deleteUser(user._id)
    .then(() => {
      setUsers(users.filter(user => user._id !== userId));
      console.log("Usuário removido com sucesso");
    })
    .catch((error) => {
      console.log("Occurred some error: " + error);
    });
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setFormData({
      name: "",
      email: "",
      telephone: "",
      birthDate: "",
    });
  };

  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col`}>
      <div className="p-10 flex-1 dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Usuários</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            Alternar Modo
          </button>
        </div>
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={editingUserId !== null}
          handleCancelEdit={handleCancelEdit}
          formatDate={formatDate}
        />
        <Table
          users={users}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
