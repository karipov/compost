#!/usr/bin/python3
import RPi.GPIO as GPIO
import time
 
#GPIO SETUP
moisture_channel = 21
light_channel = 20
GPIO.setmode(GPIO.BCM)
GPIO.setup(moisture_channel, GPIO.IN)
GPIO.setup(light_channel, GPIO.IN)
 
def moisture(channel):
    if GPIO.input(channel):
        print("Plant is unwatered")
    else:
        print("Plant is watered")

def light(channel):
    if GPIO.input(channel):
        print("Plant is receiving light")
    else:
        print("Plant is not receiving light")

 
GPIO.add_event_detect(moisture_channel, GPIO.BOTH, bouncetime=300)  # pin goes HIGH or LOW
GPIO.add_event_callback(moisture_channel, moisture)  # run callback function on change

GPIO.add_event_detect(light_channel, GPIO.BOTH, bouncetime=300)
GPIO.add_event_callback(light_channel, light)
 
# infinite loop
while True:
    time.sleep(1)