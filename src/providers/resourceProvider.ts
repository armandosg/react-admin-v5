const getOne = () => {
  return Promise.resolve({
    data: {
      id: "1:prod:resource",
      name: "resource",
    },
  });
};

const getList = () => {
  return Promise.resolve({
    data: [
      {
        id: "1:prod:resource",
        name: "resource",
      },
    ],
    total: 1,
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
