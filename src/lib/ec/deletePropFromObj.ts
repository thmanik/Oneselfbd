const deletePropFromObj = (
  obj: Record<string, string> | Record<string, unknown>,
  ...propsToDelete: string[]
) => {
  for (const prop of propsToDelete) {
    delete obj[prop];
  }
  return obj;
};

export default deletePropFromObj;
