/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Horizontal FlatList input data
*/
var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloudy",
        android: "md-cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    }
};
var horizontalFlatListData =[
    {
        hour: "1 AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "2 AM",
        status: horizontalStatus.cloud,
        degrees: 46
    },
    {
        hour: "3 AM",
        status: horizontalStatus.cloud,
        degrees: 45
    },
    {
        hour: "4 AM",
        status: horizontalStatus.thunderstorm,
        degrees: 60
    },
    {
        hour: "5 AM",
        status: horizontalStatus.sunny,
        degrees: 62
    }, 
    {
        hour: "6 AM",
        status: horizontalStatus.cloud,
        degrees: 55
    }, 
    {
        hour: "7 AM",
        status: horizontalStatus.thunderstorm,
        degrees: 56
    }, 
    {
        hour: "8 AM",
        status: horizontalStatus.cloud,
        degrees: 57
    }, 
    {
        hour: "9 AM",
        status: horizontalStatus.sunny,
        degrees: 58
    }, 
    {
        hour: "10 AM",
        status: horizontalStatus.sunny,
        degrees: 62
    }
];

export {horizontalStatus};
export {horizontalFlatListData};