import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src="https://als-inspection.cl/wp-content/uploads/2020/06/als_favicon.png"
        padding={tokens.space.medium}
      />
    </Flex>
  );
}
