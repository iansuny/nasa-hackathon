# MAGIC CONCH

## Data-integrated visualization and machine-learning based forecast for beach-goers to their desired beach destination

[![Youtube](http://i.imgur.com/xersB9H.jpg)](https://www.youtube.com/watch?v=WY036z1whbo)

> Human beings are often vulnerable to water-related disasters as a result of insufficient awareness. A gap in the available information often clouds our decisions. The solution to filling in this gap hinges on navigating through the vast, scattered, and enormous data. To fully harness these data, however, requires tremendous effort. Hence, we aim to bridge the gap of information with our service.

![Beach](http://i.imgur.com/s6AGAKO.jpg)

## Our slide

In English <https://www.slideshare.net/iansuny/magic-conch>

In Chinese <https://goo.gl/PQNF8s>

## About Magic Conch

![User Journey Map](http://i.imgur.com/FEDbq51.png)

## The Basics

Magic Conch, a data driven solution combined both web/mobile application and wearable devices (wristband), with machine-learning forecast based on various sources of open data, as well as reliable long range communication via LoRa technology, helps to guide beach-goers to enjoy their journey without risk.

Other existing solutions may be able to provide forecast information. However, with Magic Conch, we try to bring the service to the next level by implementing features that help to avoid danger.

The combination of “prediction“ and “avoidance” is our approach to guard our users’ trip to the beach. In addition, we offer more to enrich their journey.


## While planning…

With a few clicks on our application, users can avoid hazardous beach conditions while looking into preferable alternatives.

* Beach Suggestion：To be able to select from suggested beach options and suitable time according to the sea conditions analyzed through integrating data on threats such as:
    * UV Index [1]
    * HAB [2]
    * SeaSpeed [3]

* Sunscreen Reminder： remind users of sunscreen application at the right time with current UV Index

* Trip Adviser：To be able to explore popular points of interest nearby to enrich the journey.

* Risk Alert：Update with the latest threat level, notify users for plans to reroute or reschedule.

![App1](http://i.imgur.com/B3U9pI4.png)

## On the way to the beach…

Users can take the most efficient route to the beach and monitor the traffic and crowd number approximation.

## After Arrival…
Get notified and react to imminent dangers such as UV spikes, tsunami, and life emergency.

* Sunscreen Reminder: To be able to get reminder to apply sunscreen at the right time with real-time UV Index.

* Emergency notification[4]: Instant broadcast local notifications of emergency occurrence to both mobile and wristband to allow time for evacuation.

* Life saver: Upon abnormal readings or help signals from wristband modules, ring buzzer and send GPS information via LoRa to call for help.

![Hardware](http://i.imgur.com/MpQ7WWw.jpg) 
![Hardware](http://i.imgur.com/o9Jh8Kr.jpg)

## After the trip…

* Revisit the journeys with social media and badge system.
* Rate and share the trip experience with others.

![App2](http://i.imgur.com/bJSnvIy.png)

Why do not you ask the Magic Conch?

Magic Conch is more than just a trip adviser application, or a fancy wearable device but provides the following:

* Ready-to-use insights from various open data sources around the globe.

* The vast capability and potential of reliable LoRa technology to empower wearable device.

* Design base on user experience from trip planning all the way to the end of a safe day at the beach.

Magic Conch is the quintessence of our ideology, and in the future, over the seven seas, we hope it marks a horizon upon which the awareness of beach safety finally rise .

![Framework](http://i.imgur.com/ofFwrRU.jpg)

## Looking Forward

Most People do not have the ability to harness the power of open data. We hope to propagate more benefits of well-informed coastal activities.

* Cover more data categories such as harmful creatures, crowd insights, and other information to make more solid and real time recommendations.

* Establish deeper connections with users by further personalizing the user experience base on their preferences and physical condition.

* Develop a user risk feedback system within the application and wristband to mitigate the gap of real time information.

## Resources Used

[1] The Weather Company, a weather forecast data provider

[2][3] Use weather data from NOAA for Machine Learning to engage Chlorophyll a concentration prediction. Collaboration data source comes from NASA PO.DAAC database.

[4]EONET, global natural event tracker API <https://eonet.sci.gsfc.nasa.gov/docs/v2>



The mobile web is built with SailsJS. <http://sailsjs.com>

ML model paper <http://ira.lib.polyu.edu.hk/bitstream/10397/1133/1/IJEP3.pdf>

Our Github <https://github.com/iansuny/nasa-hackathon>

## Chinese Summary

夏天來臨，您是否也想規劃美好的海灘旅行，卻又擔心海灘帶來的潛在危險呢？

海嘯、藻華、溺水、紫外線所帶來的皮膚病變，無處不充斥著危機。 打開神奇海螺，附近的海攤資訊一目瞭然，我們將依據藻華、天氣、紫外線等危險因素。

透過不同顏色顯示各個海攤的指數，您可以透過時間及景點的選擇來規劃最佳的海攤行程，我們也將為您計算出最安全及推薦的海邊景點，並且提供完善的食衣住行清單，立即加入到你的旅遊計畫，開啟您的旅行吧！

抵達海灘時，將依據紫外線的強度定時提醒您補充防曬油以防曬傷影響健康狀況。 遇到警急危險時，包含紫外線過度、突發性風雨及其他危險，將即時發送通知提醒您盡快離開海域。

而緊急危險解決除後，也會發送通知給您，這時您就可以繼續享受海灘之旅。 然而，在發生無法預料的突發性溺水意外，可以透過智慧手環的觸發來呼救，手環將您的呼救訊號及定位發送給附近的遊客，提供立即性的協助，避免悲劇的發生。

神奇海螺及智慧手環，結合新科技及完善的資訊整合，陪伴您安心的享受每一趟海灘之旅。