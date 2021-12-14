import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";

import Home from '../components/home/Home';
import Productos from '../components/productos/Productos';

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";

import { UIRouter, pushStateLocationPlugin} from '@uirouter/react';

import Layout from '../containers/Layout/Layout';
//materialui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../config/themeConfig'

const states = [
  {
    name : 'layout',
    component : Layout
  },
  {
    name : 'layout.home',
    url  : '/',
    component : Home
  },{
    name : 'layout.productos',
    url  : '/productos',
    component : Productos
  }
]

const plugins = [
  pushStateLocationPlugin
];

const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  Footer
};

export function Login() {
  const { tokens } = useTheme();

  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
      <Flex
        backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <Authenticator components={components}>
          {({ signOut, user }) => (
            <ThemeProvider theme={theme}>
              <UIRouter plugins={plugins} states={states}>
                <Layout/>
              </UIRouter>
            </ThemeProvider>
          )}
        </Authenticator>
      </Flex>
      <View height="100vh">
        <Image
          src="https://als-inspection.cl/wp-content/uploads/2019/11/collage-1.jpg"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </View>
    </Grid>
  );
}
