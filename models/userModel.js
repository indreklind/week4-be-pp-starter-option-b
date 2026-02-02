let userArray = [];
let nextId = 1;

const getAll = () => {
    return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
        return false;
    }
       const newUser = {id: nextId++, name, email, password, phone_number, gender, date_of_birth, membership_status,
   };

   userArray.push(newUser);
   return newUser;
};

const findById = (id) => {
    const user = userArray.find((user) => user.id === number(id));
    if (user) {
        return user;
    } else return false;
} 

const updateOneById = (id, updatedData) => {  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.info) {
      user.info = updatedData.info;
    }
    if (updatedData.image) {
      user.image = updatedData.image;
    }
    if (updatedData.price) {
      user.price = updatedData.price;
    }
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength;
  } else return false;
};

module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
};

