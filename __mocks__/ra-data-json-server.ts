// __mocks__/ra-data-json-server.js
export default function jsonServerProvider() {
  // Mock implementation of the data provider functions you use.
  return {
    getList: vi.fn(() => Promise.resolve({ data: [], total: 0 })),
    getOne: vi.fn(() => Promise.resolve({ data: {} })),
    getMany: vi.fn(() => Promise.resolve({ data: [] })),
    // ... other methods as needed
  };
}
