//
//  RCTConvert+MapKit.h
//  ReactNativeProject
//
//  Created by Nguyen Duc Hoang on 11/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTConvert.h>
#import <MapKit/MapKit.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

NS_ASSUME_NONNULL_BEGIN
/*
 This will convert type:
 typedef struct {
    CLLocationCoordinate2D center;
    MKCoordinateSpan span;
 } MKCoordinateRegion;
 to React Native
 */
@interface RCTConvert (MapKit)
//static method : convert NSDictionary => MKCoordinateSpan
+(MKCoordinateSpan)MKCoordinateSpan:(id)json;
//Region
+(MKCoordinateRegion)MKCoordinateRegion:(id)json;
@end

NS_ASSUME_NONNULL_END
