import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {Auth,
  API, 
  graphqlOperation
} from 'aws-amplify';

import config from './src/aws-exports'

import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import { useEffect } from 'react';
import { UserInterfaceIdiom } from 'expo-constants';

Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect( () => {
    // Get the account that is signed in. If not in the database, make new database entry. If already exists, then all is okay!
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser( {bypassCache: true})

      if (userInfo){
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))

     if (userData.data.getUser ) {
       console.log("User previously registered");
        return;
     }

     const newUser = {
       id: userInfo.attributes.sub,
       name: userInfo.username,
       imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaD2U5l8Wq1og0jp9G4hau7DAUCfb9RzkyA&usqp=CAU', 
       status: 'Caller waiting in queue', 
     }

     await API.graphql(
       graphqlOperation(
         createUser, { input: newUser }
       )
     )
    }

  }
    fetchUser();
  }, [])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)