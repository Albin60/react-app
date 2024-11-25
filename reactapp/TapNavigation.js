const Tab = createBottomTapNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor:'white',
                inactiveTintColor:'lightgray',
                style: {
                    backgroundColor:'#FF6347',
                },
                labelStyle: {
                    fontSize:12,
                }
            }}
        
        >
            <Tab.Screen
             name ='Home'
             component = {{
                tabBarLabel:'Home',
                tab
             }}
            >

            </Tab.Screen>

        </Tab.Navigator>
    )
}