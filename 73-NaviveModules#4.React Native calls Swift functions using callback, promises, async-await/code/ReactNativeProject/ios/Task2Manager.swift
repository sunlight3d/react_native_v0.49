//
//  Task2Manager.swift
//  reactnativeapp70
//
//  Created by Nguyen Duc Hoang on 10/29/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
@objc(Task2Manager)
class Task2Manager: NSObject {
  @objc(doTaskX:effort:)
  func doTaskX(name: String, effort: NSNumber) -> Void {
    print("dotaskX with name = \(name), effort =\(effort)")
  }
  //callback
  @objc(getAllTasks:callback:)
  func getAllTasks(params: [String: Any], callback: RCTResponseSenderBlock){
    let tasks = [
      ["name": "buy a new car",
       "finishedDate": "20-10-2018"],
      ["name": "Learn React Native",
       "finishedDate": "30-10-2018"]]
    callback([NSNull(), tasks]) //successful
    //callback(["Cannot find tasks", []])//Error
  }
  //Promise
  @objc(getSomeTasks:resolver:rejecter:)
  func getSomeTasks(params: String,
                    resolver: RCTPromiseResolveBlock,//success's callback
                    rejecter: RCTPromiseRejectBlock){ //failed's callback
    let tasks = [
      ["name": "Learn how to call Promise",
       "finishedDate": "20-10-2018"],
      ["name": "Learn React Native",
       "finishedDate": "30-10-2018"]]
    if (params == "all") {
      resolver(tasks)
    } else {
      rejecter("500","Internal error occur","Internal Error" as? Error)
    }
  }
}
