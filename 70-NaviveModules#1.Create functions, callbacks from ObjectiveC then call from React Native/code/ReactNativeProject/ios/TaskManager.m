//
//  TaskManager.m
//  reactnativeapp70
//
//  Created by Nguyen Duc Hoang on 10/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "TaskManager.h"
#import <React/RCTLog.h>

@implementation TaskManager
RCT_EXPORT_MODULE();//Use "TaskManager" as module's name
//A normal function with basic params
RCT_EXPORT_METHOD(doTask1: (NSString *)taskName effort:(int)effort) {
  //function's content
  RCTLogInfo(@"Do task with name: %@, effort: %d", taskName, effort);
}
//Function with NSDictionary params
RCT_EXPORT_METHOD(doTask2:(NSString *)taskName params:(NSDictionary *)params) {
  RCTLogInfo(@"Do task with params = %@", params);
}
//Function which return value => use callback !
RCT_EXPORT_METHOD(getAllTasks: (RCTResponseSenderBlock)callback) {
  NSArray *tasks = @[
                     @{@"name": @"buy a new car",
                       @"finishedDate": @"20-10-2018"},
                     @{@"name": @"Learn React Native",
                       @"finishedDate": @"30-10-2018"}];
  //tasks = nil;
  //callback successful
  if (tasks) {
    callback(@[[NSNull null], tasks]);
  } else {
    //Error
    callback(@[@"Cannot find tasks", [NSNull null]]);
  }
  
}
@end
