import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="https://www.alsglobal.es/static/img/logo_icon@2x.png"
       padding={tokens.space.medium}
    />
  );
}
