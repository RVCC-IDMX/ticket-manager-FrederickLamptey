# Function of app
This app stores and gives information about purchased tickets.

## How app operates
The app uses an emit function from an EventEmitter object to emit events. The events were triggered using listener functions such as on and once.

![Screenshot (255)](https://user-images.githubusercontent.com/102755255/197409706-7d932520-5baa-4945-84c4-43ccfe7c6c5a.png)
With the help of this functions, events get triggered whenevever these functions "listens" the events.

In this app, we have a database class that saves email, price, and timestamp of every customer who purchases an ticket. It runs a query on every purchase.
![Screenshot (256)](https://user-images.githubusercontent.com/102755255/197409940-1464dc2f-e5fc-421b-9c8b-279989f9ba99.png)

Nevertheless, it has a ticket manager class that manages everything with regards to ticket purchases. It gives info about ticket supply, date and even tells when there are no more tickets available for purchase.
![Screenshot (257)](https://user-images.githubusercontent.com/102755255/197410107-2399cbbc-5b4e-4ead-b65c-53406db07b22.png)

Moreover, it has a listener file that conatains event listeners and events with regards to some ticket purchases. This events gets printed out whenever we run the index.js file.
![Screenshot (258)](https://user-images.githubusercontent.com/102755255/197410279-b40a0006-007b-4c3a-adec-6c7817560d00.png)

The index.js is the major file that conatains and runs every event that occurs in the app. It is like the mother file. It emits events such as last ticket bought, error handing, etc
![Screenshot (259)](https://user-images.githubusercontent.com/102755255/197410483-24b0551a-7ca5-4361-8231-83e502b3345f.png)

In conclusion, when you run the app, you get an output like this in your terminal.
![Screenshot (260)](https://user-images.githubusercontent.com/102755255/197410557-fe05b40f-486e-4f14-8083-66323faad7e0.png)

Note: My output has this colorful "writings" because I used a module called chalk to log my console out. Hence, yours will be different if you don't use this module.
