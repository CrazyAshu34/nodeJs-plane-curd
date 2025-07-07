const arr = [];
let myid = 1;

export const createUser = (req, res) => {
  const body = { id: myid++, ...req.body };
  arr.push(body);
  res.status(201).json(body);
};

export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = arr.findIndex((prev) => prev.id === id);
  if (index === -1) res.status(404).json({ message: "item not found" });
  arr[index] = { ...arr[index], ...req.body };
  res.json(arr[index]);
};

export const deleteUser = (req, res) => {
  const paramId = req.params.id;
  console.log(typeof paramId);
  const findId = arr.findIndex((prev) => prev.id == paramId);
  if (findId === -1) res.status(404).json({ message: "item not found" });
  const spliceArr = arr.splice(findId, 1);
  res.json({
    message: "your item got deleted thanks",
    spliceArr: spliceArr[0],
  });
};

export const patchUser = (req, res) => {
  const path = parseInt(req.params.id);
  const updatedBody = req.body;
  const findItem = arr.find((prev) => prev.id === path);
  if (!findItem) return res.status(404).send("User not found");
  Object.assign(findItem, updatedBody);
  res.json({ message: "success", findItem });
};

export const getAllUsers = (req, res) => {
  res.send(arr);
};
