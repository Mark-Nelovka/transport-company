interface IDynamicPathNav {
  e: React.MouseEvent;
  dynamicName: string;
}

export default function getDynamicPathForNavigation({
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
