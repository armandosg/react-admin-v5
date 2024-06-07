import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  combineDataProviders,
  DataProvider,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const userProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const postsProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);

const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "users":
      return userProvider as DataProvider;
    case "posts":
      return postsProvider as DataProvider;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
});

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
