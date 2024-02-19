const objectToSearchParams = (obj: Record<string, string>): string => {
  const searchParams = new URLSearchParams();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      searchParams.append(key, obj[key].toString());
    }
  }

  return searchParams.toString();
};

export default objectToSearchParams;
