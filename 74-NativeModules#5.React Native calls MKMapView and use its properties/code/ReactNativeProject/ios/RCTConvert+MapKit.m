//
//  RCTConvert+MapKit.m
//  ReactNativeProject
//
//  Created by Nguyen Duc Hoang on 11/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RCTConvert+MapKit.h"

@implementation RCTConvert (MapKit)
+(MKCoordinateSpan)MKCoordinateSpan:(id)json {
  /*
   This will convert this to React Native:
   typedef struct {
      CLLocationDegrees latitudeDelta;
      CLLocationDegrees longitudeDelta;
   } MKCoordinateSpan;
   */
  json = [self NSDictionary:json];//convert id to NSDictionary
  return (MKCoordinateSpan){
    [self CLLocationDegrees: json[@"latitudeDelta"]],
    [self CLLocationDegrees: json[@"longitudeDelta"]]
  };
  
}
//Region
+(MKCoordinateRegion)MKCoordinateRegion:(id)json{
  /*
   Convert type:
   typedef struct {
      CLLocationCoordinate2D center;
      MKCoordinateSpan span;
   } MKCoordinateRegion;
   */
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D: json],
    [self MKCoordinateSpan: json]
  };
}
@end
