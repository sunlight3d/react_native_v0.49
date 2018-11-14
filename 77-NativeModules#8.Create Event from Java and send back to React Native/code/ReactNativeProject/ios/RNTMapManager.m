//
//  RNTMapManager.m
//  ReactNativeProject
//
//  Created by Nguyen Duc Hoang on 11/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+MapKit.h"

@implementation RNTMapManager
RCT_EXPORT_MODULE()
//Map an UIView in ObjectiveC => View in React Native
-(UIView *)view {
  MKMapView *mapView = [[MKMapView alloc] init];
  return mapView;
}
//Export "zoomEnabled" to React Native
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
//Export complex properties to React Native ?
//RCT_CUSTOM_VIEW_PROPERTY(name, type, viewClass)
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  MKCoordinateRegion newRegion = json ? [RCTConvert MKCoordinateRegion:json]:defaultView.region;
  [view setRegion:newRegion animated:YES];
}
@end
