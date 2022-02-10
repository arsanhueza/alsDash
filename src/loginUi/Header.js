import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt=""
      src=""
       padding={tokens.space.small}
    />
  );
}
