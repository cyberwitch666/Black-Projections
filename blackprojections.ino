//Black Projections Final Project

int REED_PIN1 = A0;
int REED_PIN2 = A1;
int REED_PIN3 = A2;
int REED_PIN4 = 2;
int REED_PIN5 = 3;
int REED_PIN6 = 4;
int REED_PIN7 = 5;
int REED_PIN8 = 6;
int REED_PIN9 = 7;
int REED_PIN10 = 8;
int REED_PIN11 = 9;
int REED_PIN12 = 10;
int REED_PIN13 = 11;
int REED_PIN14 = 12;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(REED_PIN1, INPUT_PULLUP);
  pinMode(REED_PIN2, INPUT_PULLUP);
  pinMode(REED_PIN3, INPUT_PULLUP);
  pinMode(REED_PIN4, INPUT_PULLUP);
  pinMode(REED_PIN5, INPUT_PULLUP);
  pinMode(REED_PIN6, INPUT_PULLUP);
  pinMode(REED_PIN7, INPUT_PULLUP);
  pinMode(REED_PIN8, INPUT_PULLUP);
  pinMode(REED_PIN9, INPUT_PULLUP);
  pinMode(REED_PIN10, INPUT_PULLUP);
  pinMode(REED_PIN11, INPUT_PULLUP);
  pinMode(REED_PIN12, INPUT_PULLUP);
  pinMode(REED_PIN13, INPUT_PULLUP);
  pinMode(REED_PIN14, INPUT_PULLUP);

}

void loop() {
  // put your main code here, to run repeatedly:
 
  
  int reedPin1State = digitalRead(REED_PIN1);
  int reedPin2State = digitalRead(REED_PIN2);
  int reedPin3State = digitalRead(REED_PIN3);
  int reedPin4State = digitalRead(REED_PIN4);
  int reedPin5State = digitalRead(REED_PIN5);
  int reedPin6State = digitalRead(REED_PIN6);
  int reedPin7State = digitalRead(REED_PIN7);
  int reedPin8State = digitalRead(REED_PIN8);
  int reedPin9State = digitalRead(REED_PIN9);
  int reedPin10State = digitalRead(REED_PIN10);
  int reedPin11State = digitalRead(REED_PIN11);
  int reedPin12State = digitalRead(REED_PIN12);
  int reedPin13State = digitalRead(REED_PIN13);
  int reedPin14State = digitalRead(REED_PIN14);

  Serial.print(reedPin1State);
  Serial.print(",");
  Serial.print(reedPin2State);
  Serial.print(",");
  Serial.print(reedPin3State);
  Serial.print(",");  
  Serial.print(reedPin4State);
  Serial.print(",");
  Serial.print(reedPin5State);
  Serial.print(",");
  Serial.print(reedPin6State);
  Serial.print(",");
  Serial.print(reedPin7State);
  Serial.print(",");
  Serial.print(reedPin8State);
  Serial.print(",");
  Serial.print(reedPin9State);
  Serial.print(",");
  Serial.print(reedPin10State);
  Serial.print(",");
  Serial.print(reedPin11State);
  Serial.print(","); 
  Serial.print(reedPin12State);
  Serial.print(","); 
  Serial.print(reedPin13State);
  Serial.print(",");
  Serial.println(reedPin14State);
  delay(100);
}
