export const getFormattedNode = (elem, position) => {
  console.log(elem);
  const { id, type, parameters } = elem;
  if (id) {
    return {
      id,
      type,
      position,
      data: { label: type, parameters },
    };
  }
  return undefined;
};
