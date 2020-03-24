# Team-Titans

## Description

My Tanso is a carbon emission tracker application that helps you track the individual carbon emissions of our daily commutes. 
My Tanso let's the user set the source, destination and the type of the commute. 
My Tanso let's you select the number of occupants for the own vehicle  and shared vehicle type of commutes.
My Tanso displays and highlights the alternative commute options with lower carbon emissions based on the distance for the selected commute. 
My Tanso displays the real time carbon emission data during the commute along with the count of occupants.
My Tanso shows the amount of CO2 saved & leaves collected after the completion of the commute.
My Tanso prototype uses the below default values for its Carbon emission/savings calculations:

* CO2 emitted per litre of Petrol = 2.31kg/ltr
* CO2 emitted per litre of Diesel = 2.68kg/ltr
* Number of Occupants for Public Transport Bus = 50
* Number of Occupants for Public Transport Train= 150

#### Rewards:

1. The user gets 4 leafs per KM travelled.
2. The user gets:

* 25X leafs/km on commute by walk.
* 25X leafs/km on commute by bicycle.
* 15X leafs/km on commute by bike.
* 10X leafs/km on shared commute by car,
* 15X leafs/km on public commute by bus,
* 20X leafs/km on public commute by train.
* The user can convert 1000 leafs collected to create a tree.

#### Example:

Scenario 1: Car with 1 Occupant
-------------------------------
* No of occupants (n)= 1
* Distance (x) = 35km
* Milage of the vehicle (y) = 20km/ltr
* Fuel required for x km per person (f) = (x/y)/n => (35/20)/1 = 1.75ltr
* CO2 emitted per litre (c) = 2.31kg
* CO2 emitted for f litres per person = c*f => 2.31*1.75 = 4.04 kg/CO2
* Leafs rewarded = 35km*4 = 140

Scenario 2: Car with 3 Occupants
--------------------------------
* No of occupants (n)= 3
* Distance (x) =35km
* Milage of the vehicle (y)=20km/ltr
* Fuel required for x km per person (f) = (x/y)/n => (35/20)/3 = 0.58ltr
* CO2 emitted per litre (c) = 2.31kg
* CO2 emitted for f litres = c*f => 2.31*0.58 =1.33 kg/CO2

* Leafs rewarded = 35km*4*10 = 1400
* Total emissions = 4.04kg/CO2
* Savings = 4.04 - 1.33 = 2.71 kg/CO2

Formula used : 
Petrol Vehicle
--------------
* CO2 emitted for Petrol Vehicle = ((x/y)/n ) * 2.31
* CO2 Saved  for Petrol Vehicle  = ((x/y) * 2.31) - ((x/y)/n ) * 2.31

Diesel Vehicle
--------------
* CO2 emitted for Diesel Vehicle = ((x/y)/n ) * 2.68
* CO2 Saved  for Diesel Vehicle= ((x/y) * 2.68) - (((x/y)/n ) * 2.68)

## Application Flow

<a href="https://github.com/Hariprasath12/Team-Titans/raw/master/MyTanso.ppt" target="_blank">MyTanso.ppt</a>


## Run

Install <a href="https://nodejs.org/en/download/" target="_blank">Node</a>

```
$ git clone https://github.com/Hariprasath12/Team-Titans.git
$ cd Team-Titans
$ npm install
$ webpack
$ node index.js (In another terminal window with current project folder)
```

### For Linux

```
$ git clone https://github.com/Hariprasath12/Team-Titans.git
$ cd Team-Titans
$ npm install
$ npm run webpack

Open new tab in terminal and run
$ npx nodemon index.js  (In another terminal window with current project folder)

```
