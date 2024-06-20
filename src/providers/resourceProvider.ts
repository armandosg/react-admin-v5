import { GetOneParams, HttpError } from "react-admin";

const data = [
  {
    id: "1:prod:resource1",
    name: "resource1",
  },
  {
    id: "resource2",
    name: "resource2",
  },
];

const getOne = (resource: string, params: GetOneParams) => {
  const item = data.find((item) => item.id === params.id);
  if (!item) {
    throw new HttpError("Not found", 404);
  }
  return Promise.resolve({
    data: item,
  });
};

const getList = () => {
  return Promise.resolve({
    data,
    total: data.length,
  });
};

const resourceProvider = {
  getOne,
  getList,
  getMany: () => {
    throw new Error("Not implemented");
  },
  getManyReference: () => {
    throw new Error("Not implemented");
  },
  update: () => {
    throw new Error("Not implemented");
  },
  updateMany: () => {
    throw new Error("Not implemented");
  },
  create: () => {
    throw new Error("Not implemented");
  },
  delete: () => {
    throw new Error("Not implemented");
  },
  deleteMany: () => {
    throw new Error("Not implemented");
  },
};

export default resourceProvider;
