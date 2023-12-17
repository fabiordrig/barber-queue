export const convertToCamelCase = <T>(data: any): T => {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => convertToCamelCase(item)) as T;
  }

  const camelCaseData: any = {};

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      camelCaseData[camelCaseKey] = convertToCamelCase(data[key]);
    }
  }

  return camelCaseData as T;
};
