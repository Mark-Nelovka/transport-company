interface IDynamicPathNav {
  e: React.MouseEvent;
  dynamicName: string;
}

interface IDynamicPath {
  dynamicName: string;
}

export function getDynamicPathForNavigation({
  e,
  dynamicName,
}: IDynamicPathNav) {
  const { id } = e.target as HTMLLinkElement;
  if (dynamicName !== id) {
    const changesSectionName = id
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, " ")
      .split(" ")
      .join("-")
      .toLowerCase()
      .trim();
    return changesSectionName;
  }
}

export function getDynamicPath(dynamicName: string) {
  const changesSectionName = dynamicName
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .join("-")
    .toLowerCase()
    .trim();
  return changesSectionName;
}
