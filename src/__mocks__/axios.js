// Manual mock for axios to avoid Jest parsing ESM module from node_modules
module.exports = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
