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
//Function with "Promise"
RCT_REMAP_METHOD(getSomeTasks, params:(NSString *)params
                 resolver:(RCTPromiseResolveBlock)resolve //success's callback
                 rejecter:(RCTPromiseRejectBlock)reject){ //failed's callback
  NSArray *tasks = @[
                     @{@"name": @"buy a new house",
                       @"finishedDate": @"30-10-2018"},
                     @{@"name": @"Learn Promise in Javasript",
                       @"finishedDate": @"30-11-2018"}];
  if ([params isEqualToString: @"all"]) {
    //success's callback
    resolve(tasks);
  } else {
    //failed's callback
    NSString *code = @"500";
    NSString *message = @"Cannot get tasks, internal error";
    NSError *error = [NSError errorWithDomain:@"Internal Error"
                                         code:500 userInfo:@{
                                                             NSLocalizedDescriptionKey: @"Something wrong with tasks !"
                                                            }];
    reject(code, message, error);
    
  }
}

@end
