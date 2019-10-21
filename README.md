# Perfect-Strangers_HashHacks4
Hackathon at Cluster Innovation Center, DU - 19-20 Oct 2019



Inspiration

Countries and organisations decrease their carbon footprint to earn carbon-credits which raise their reputation internationally. It promotes them to minimise pollution.
We propose to individualise this scheme. With schemes such as “Swachh Bharat”, a garbage truck collects trash from every locality, every day. We motivate the users to not litter, hold onto the trash and exchange it at the Garbage Truck for some credits which they can further exchange for some incentives like coupons.
In this time, data is knowledge and knowledge is power. We believe “Garbage” is a very interesting data. Machine Learning is on the rise, so why not use some leading-edge technology to make the world a better place. 
 
 
What it does

The platform that we’re providing is split into 3 products.
One is an Android app built in Kotlin, provided to the ‘worker’ to update the weight associated with the recyclable and non-recyclable waste that the user has put out. Once the worker submits the data, it is updated into the database and an OTP is generated for the user.
The user can fill the OTP in his app to confirm and record the transaction as successful. The ‘user app’ is also built for android with Kotlin. The user can view and change his profile, see his credit points and talk to a chatbot about his queries, which is built using DialogFlow. 
The user is also provided with an image classifier, which allows him to classify objects into recyclable and non-recyclable in real time. The classifier is implemented through an inbuilt API in TensorflowLite.
The third product offered is a WebApp, built in Angular for the admin to monitor the user and worker data and also to analyse data and interpret it in any form.
 
How we built it

We used different technologies and integrated them together. 
The app is built with Kotlin, the website uses Angular, both of which have been connected to a common backend using Google Firebase.
We’ve implemented the chatbot using Google Dialogflow API, the garbage segregator has been implemented through TensorflowLite for Android.

Challenges we ran into

None of our team members were very adept at Kotlin and app development. This project forced us to jump into the rabbit hole and pray we could climb out.

Accomplishments that we're proud of

We were able to get a working prototype of the apps in time despite having such low knowledge of android app development.
There was no premade API provided to classify data into recyclable / non-recyclable, so we had to train and run an object detection model which was further pipelined into a data dictionary which allowed classification into three categories namely - recyclable, non-recyclable, can not classify.

What we learned

Android development is complex, and good ideas take a lot of time to develop.
We’ve integrated one Machine Learning model which helped us learn so much about data science.

Built With

Web - Angular, Firebase
Android Development - Kotlin in Android Studio, TensorflowLite
Machine Learning - TensorflowLite, DialogFlow

Team Members

Chandrashekhar Jangra - https://github.com/shekhar0809
Saksham Taneja - https://github.com/sakshamtaneja16
Chetan Jain - https://github.com/Chetanjain10
Divyanshu Shekhar - https://github.com/dshekhar7

