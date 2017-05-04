////code for arduino mini

#include <SoftwareSerial.h>   // 引用程式庫

const int pin_button = 2;       // pin button at 7  
int val_button;
int temp_state;
int debounce_time;
int buzzer[] = {500,500,500};
// 定義連接LoRa模組的序列埠
//SoftwareSerial LoRa(1, 0); // 接收腳, 傳送腳 mini:tx A0 rx A1

char val;  // 儲存接收資料的變數
 
void setup() {
  Serial.begin(9600);   // 與電腦序列埠連線
  Serial.println("LoRa is ready!");
  //Serial.write('\r');
  pinMode(INPUT,2);
  // 設定LoRa模組的連線速率
//  LoRa.begin(9600);
  
  //用print 的方式自動下達AT command
}
 
void loop() { // run over and over
  
  
//  Serial.println(digitalRead(pin_button));    
  if(digitalRead(pin_button) && !temp_state && debounce_time == 0){
    //Serial.println("Send Data");
    debounce_time = 100;
//    073E7A9D017DCD7B
    Serial.print("AT+DTX=22,073E7A9D017DCD7BC81E0A\r");
    // buzzer bi! bi! bi!
    for (int i=0; i<=3 ; i++){
      tone(A3,buzzer[i],500);
      delay(1000);
      }
    }
  else if(debounce_time >= 1)
     debounce_time -= 1;
   temp_state = digitalRead(pin_button);
   
}

  /*
 //送出測試資料 lat: 25.045361, long:121.522544, batteryLevel:200, temp: 30, state: 10(00001010)
  // LoRa.print("AT+DTX=22,073E4970017E2971C81E0A\r");
  // delay(1500*60);
  //自行輸入AT command
 if (Serial.available()) {
    val = Serial.read();
    LoRa.print(val);
  }
  // 若收到LoRa模組的資料，則送到「序列埠監控視窗」
  ;
  if (LoRa.available() ) {
    val = LoRa.read();
    Serial.print(val);
    */
