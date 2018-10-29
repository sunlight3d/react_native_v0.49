//
//  Task2ManagerBridge.m
//  reactnativeapp70
//
//  Created by Nguyen Duc Hoang on 10/29/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
@interface RCT_EXTERN_MODULE(Task2Manager, NSObject)
RCT_EXTERN_METHOD(doTaskX:(NSString *)name effort:(nonnull NSNumber *)effort)
RCT_EXTERN_METHOD(getAllTasks:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getSomeTasks:(NSString *)params
                  resolver: (RCTPromiseResolveBlock)resolver
                  rejecter: (RCTPromiseRejectBlock)rejecter)
@end
