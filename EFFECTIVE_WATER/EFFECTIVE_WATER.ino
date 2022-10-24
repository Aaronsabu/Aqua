#define echoPin 2 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 3 //attach pin D3 Arduino to pin Trig of HC-SR04

// defines variables
long duration; // variable for the duration of sound wave travel
int distance; // variable for the distance measurement  

int IRSensor1 = 5; // connect ir sensor to arduino pin 2
int IRSensor2 = 7;
int IRSensor3 = 8;
int IRSensor4 = 10;
int IRSensor5 = 12;
int LED = 13; // conect Led to arduino pin 13

int Relaypin = 6;

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT

  pinMode (IRSensor1, INPUT); // sensor pin INPUT
  pinMode (IRSensor2, INPUT);
  pinMode (IRSensor3, INPUT);
  pinMode (IRSensor4, INPUT);
  
  pinMode (IRSensor5, INPUT);
  pinMode (LED, OUTPUT); // Led pin OUTPUT

  pinMode(Relaypin, OUTPUT); // Define the Relaypin as output pin
  
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
}

void loop() {
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Displays the distance on the Serial Monitor

  int statusSensor1 = digitalRead (IRSensor1);
  int statusSensor2 = digitalRead (IRSensor2);
  int statusSensor3 = digitalRead (IRSensor3);
  int statusSensor4 = digitalRead (IRSensor4);
  int statusSensor5 = digitalRead (IRSensor5);
  
  digitalWrite(Relaypin, LOW);
  
  if ((statusSensor1 != 1) && (statusSensor2 == 1) && (statusSensor3 == 1) && (statusSensor4 == 1) && (statusSensor5 == 1))
  {
    //relayOn();
    digitalWrite(Relaypin, HIGH); // Sends high signal 
    
    digitalWrite(LED, HIGH); // LED High
    if(distance < 80)
    {
      //relayOff();
      digitalWrite(Relaypin, LOW); // Makes the signal low
      Serial.print("SENSOR 1 ACTIVATED");
    }
  }
  else
    {    
    digitalWrite(LED, LOW); // LED LOW
    }
  

    
    if((statusSensor1 != 1) && (statusSensor2 != 1) && (statusSensor3 == 1) && (statusSensor4 == 1) && (statusSensor5 == 1))
    {
     digitalWrite(Relaypin, HIGH);
     digitalWrite(LED, HIGH); // LED High
     if(distance < 60)
      {
      //relayOff();
      digitalWrite(Relaypin, LOW);
      Serial.print(" SENSORS 1&2 ACTIVATED");
      }
    }

    if((statusSensor1 != 1) && (statusSensor2 != 1) && (statusSensor3 != 1) && (statusSensor4 == 1) && (statusSensor5 == 1))
    {
     digitalWrite(Relaypin, HIGH);
     digitalWrite(LED, HIGH); // LED High
     if(distance < 50)
      {
      //relayOff();
      digitalWrite(Relaypin, LOW);
      Serial.print("SENSORS 1,2&3 ACTIVATED");
      }
    }

      if((statusSensor1 != 1) && (statusSensor2 != 1) && (statusSensor3 != 1) && (statusSensor4 != 1) && (statusSensor5 == 1))
    {
     digitalWrite(Relaypin, HIGH);
     digitalWrite(LED, HIGH); // LED High
     if(distance < 35)
      {
      //relayOff();
      digitalWrite(Relaypin, LOW);
      Serial.print("SENSORS 1,2,3&4 ACTIVATED");
      }
    }


      if((statusSensor1 != 1) && (statusSensor2 != 1) && (statusSensor3 != 1) && (statusSensor4 != 1) && (statusSensor5 != 1))
    {
     digitalWrite(Relaypin, HIGH);
     digitalWrite(LED, HIGH); // LED High
     if(distance < 22)
      {
      //relayOff();
      digitalWrite(Relaypin, LOW);
      Serial.print("SENSORS 1,2,3,4&5 ACTIVATED");
      }
    }
  

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
}
