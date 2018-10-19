/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		displayEvents();
		document.getElementById("eventScreen").innerHTML = 'deviceready';
		
		var push = PushNotification.init({
            "android": {
                //"senderID": "416315380994"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });
		
        //e8xYqxD4VF0:APA91bGbUUgNUbPq57aAUbLcnawEz5OkVbANU9sk8XIBlEL_ZzahqYv0gr5EeU-bPap9GSOu4xw-Q5PyFIfH1JhVVM0P7WdmwkB9wwtQY8Tz3AEsmfeRT_0f09V2bphM_5Y8VSPRwJqP
        push.on('registration', function(data) {
            console.log("registration event");
			document.getElementById("eventScreen").innerHTML = 'registration event';
            document.getElementById("komischeID").value = data.registrationId;
			alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        });

        push.on('notification', function(data) {
        	console.log("notification event");
            console.log(JSON.stringify(data));
            
			
            push.finish(function () {
                console.log('finish successfully called');
				
            });
        });

        push.on('error', function(e) {
            console.log("push error");
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:none;');
        console.log('Received Event: ' + id);
		
		// eigene Funktionen
		
			
		
		
    }
};

function displayEvents(){
	
		document.getElementById('connectScreen').style.display = 'none';
		document.getElementById('eventScreen').style.display = 'block';
}























