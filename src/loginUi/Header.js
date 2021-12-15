import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="https://alsgroup.mn/wp-content/uploads/2018/01/ShareHolderInfo-GeneralInfo.png"
      // padding={tokens.space.large}
    />
  );
}
