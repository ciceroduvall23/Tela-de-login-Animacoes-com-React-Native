import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>

             <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
        
                <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{headerShown: false}}
            />
             <Stack.Screen
            name="SingIn"
            component={SingIn}
            options={{headerShown: false}} /*Essas telas não vai ter o header ou cabeçalho  */
            />

    
        </Stack.Navigator>
    )
}
