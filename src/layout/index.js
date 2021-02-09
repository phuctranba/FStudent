import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './login';
import StudyGroupScreen from './study_group';
import CoursewareScreen from './courseware';
import UtilitiesScreen from './utilities';
import ActionsScreen from './action';
import Read from './read';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '../components/icon'

const Tab = createMaterialBottomTabNavigator();
function TabHome() {
    return (
        <Tab.Navigator
            initialRouteName="ActionsScreen"
            activeColor={"#3e8be9"}
            labeled={false}
            inactiveColor={"#cacaca"}
            barStyle={{ backgroundColor: '#ffffff'}}>
            <Tab.Screen name="StudyGroupScreen" component={StudyGroupScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <Icon type={"FontAwesome"} name="group" color={color} size={focused?23:18} />
                            ),
                        }}/>
            <Tab.Screen name="CoursewareScreen" component={CoursewareScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <Icon type={"FontAwesome"} name="book" color={color} size={focused?23:18} />
                            ),
                        }}/>
            <Tab.Screen name="UtilitiesScreen" component={UtilitiesScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <Icon type={"FontAwesome"} name="list-alt" color={color} size={focused?23:18} />
                            ),
                        }}/>
            <Tab.Screen name="ActionsScreen" component={ActionsScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <Icon type={"FontAwesome"} name="home" color={color} size={focused?25:19} />
                            ),
                        }}/>
        </Tab.Navigator>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userToken: null,
            isSignout: true,
        };
    };

    update = () => {
        this.setState({
            userToken: true,
        });
    };

    render() {
        return (
            <NavigationContainer>
                <StatusBar translucent={true} backgroundColor="#00000000" barStyle="dark-content" />
                {this.state.userToken == null ? (
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                        {/*No token found, user isn't signed in*/}
                        <Stack.Screen
                            name="SignIn"

                            component={LoginScreen}
                            options={{
                                title: 'Sign in',
                                // When logging out, a pop animation feels intuitive
                                // You can remove this if you want the default 'push' animation
                                animationTypeForReplace: this.state.isSignout ? 'pop' : 'push',
                            }}
                            initialParams={{move: this.update}}
                        />
                    </Stack.Navigator>

                ) : (
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <Stack.Screen
                            name="TabHome"
                            component={TabHome}
                        />
                        <Stack.Screen
                            name="Read"
                            component={Read}
                        />
                    </Stack.Navigator>
                )}

            </NavigationContainer>
        );
    }
}

export default App;
