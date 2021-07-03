Blockly.defineBlocksWithJsonArray(  // BEGIN JSON EXTRACT
  [{
    "type": "device",
    "message0": "ESPHome %1 Node name: %2 %3 Platform: %4 %5 Board: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": "name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "cpu",
        "options": [
          [
            "ESP32",
            "ESP32"
          ],
          [
            "ESP8266",
            "ESP8266"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board",
        "options": [
          [
            "esp32-poe-iso",
            "esp32-poe-iso"
          ],
          [
            "esp32-poe",
            "esp32-poe"
          ],
          [
            "esp32cam",
            "esp32cam"
          ],
          [
            "wemos_d1_mini32",
            "wemos_d1_mini32"
          ],
          [
            "node32s",
            "node32s"
          ],
          [
            "nodemcu-32s",
            "nodemcu-32s"
          ],
          [
            "esp8266 d1",
            "d1"
          ],
          [
            "esp8266 d1_mini",
            "d1_mini"
          ],
          [
            "esp8266 d1_mini_lite",
            "d1_mini_lite"
          ],
          [
            "esp8266 d1_mini_pro",
            "d1_mini_pro"
          ],
          [
            "esp8266 nodemcu",
            "nodemcu"
          ],
          [
            "esp8266 nodemcuv2",
            "nodemcuv2"
          ]
        ]
      }
    ],
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "wifi",
    "message0": "Wifi %1 SSID: %2 %3 Password: %4 %5 Manual ip: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ssid",
        "text": "SSID"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "password",
        "text": "wifi_password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "manual_ip",
        "check": "Ip"
      }
    ],
    "inputsInline": false,
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "manual_ip",
    "message0": "IP %1 Static ip: %2 . %3 . %4 . %5 %6 Gateway: %7 . %8 . %9 . %10 %11 Subnet: %12 . %13 . %14 . %15",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "ip_1",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "ip_2",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "ip_3",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "ip_4",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "gatew_1",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "gatew_2",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "gatew_3",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "gatew_4",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "subn_1",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "subn_2",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "subn_3",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "subn_4",
        "value": 0,
        "min": 0,
        "max": 255
      }
    ],
    "output": "Ip",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "logger",
    "message0": "Logger %1 Level: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "level",
        "options": [
          [
            "NONE",
            "NONE"
          ],
          [
            "ERROR",
            "ERROR"
          ],
          [
            "WARN",
            "WARN"
          ],
          [
            "INFO",
            "INFO"
          ],
          [
            "DEBUG",
            "DEBUG"
          ],
          [
            "VERBOSE",
            "VERBOSE"
          ],
          [
            "VERY_VERBOSE",
            "VERY_VERBOSE"
          ]
        ]
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "i2c",
    "message0": "I2C %1 SDA pin: %2 %3 SCL pin: %4 %5 Scan: %6 %7 Id: %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "sda_pin",
        "text": "13"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "scl_pin",
        "text": "16"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "scan",
        "options": [
          [
            "true",
            "True"
          ],
          [
            "false",
            "False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "i2c_bus"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "web_server",
    "message0": "Web Server %1 Port: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "port",
        "text": "80"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pcf8574",
    "message0": "PCF8574 %1 %2 Adress 0x20: %3 %4 %5 Adress 0x21: %6 %7 %8 Adress 0x22: %9 %10 %11 Adress 0x23: %12 %13 %14 Adress 0x24: %15 %16 %17 Adress 0x25: %18 %19 %20 Adress 0x26: %21 %22 %23 Adress 0x27: %24",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x20",
        "checked": true
      },
      {
        "type": "field_input",
        "name": "0x20_id",
        "text": "pcf8574_0x20"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x21",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x21_id",
        "text": "pcf8574_0x21"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x22",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x22_id",
        "text": "pcf8574_0x22"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x23",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x23_id",
        "text": "pcf8574_0x23"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x24",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x24_id",
        "text": "pcf8574_0x24"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x25",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x25_id",
        "text": "pcf8574_0x25"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x26",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x26_id",
        "text": "pcf8574_0x26"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "0x27",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "0x27_id",
        "text": "pcf8574_0x27"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "binary_sensor",
    "message0": "Binary Sensor %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "binary_sensor",
        "check": "Binary sensor"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "actions",
    "message0": "Binary Sensor Action %1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "action_list",
        "options": [
          [
            "Switch toggle",
            "switch.toggle"
          ],
          [
            "Switch turn on",
            "switch.turn_on"
          ],
          [
            "Switch turn off",
            "switch.turn_off"
          ],
          [
            "Cover open",
            "cover.open"
          ],
          [
            "Cover close",
            "cover.close"
          ],
          [
            "Cover stop",
            "cover.stop"
          ],
          [
            "Light toggle",
            "light.toggle"
          ],
          [
            "Light turn on",
            "light.turn_on"
          ],
          [
            "Light turn off",
            "light.turn_off"
          ],
          [
            "Fan toggle",
            "fan.toggle"
          ],
          [
            "Fan turn on",
            "fan.turn_on"
          ],
          [
            "Fan turn off",
            "fan.turn_off"
          ],
          [
            "Logger",
            "logger.log"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "id"
      }
    ],
    "previousStatement": "Action",
    "nextStatement": "Action",
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "light",
    "message0": "Light %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "light",
        "check": "Light"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "light_component",
    "message0": "Light %1 Name: %2 %3 Output: %4 %5 Id: %6 %7 %8 Restore mode: %9",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "output id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "component_id",
        "text": "light id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "restore_mode",
        "checked": true
      },
      {
        "type": "field_dropdown",
        "name": "restore_mode_list",
        "options": [
          [
            "Always OFF",
            "always off"
          ],
          [
            "Always ON",
            "always on"
          ],
          [
            "Restore default OFF",
            "restore default off"
          ],
          [
            "Restore default ON",
            "restore default on"
          ]
        ]
      }
    ],
    "previousStatement": "Light",
    "nextStatement": "Light",
    "colour": 170,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cover",
    "message0": "Cover %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "cover",
        "check": "Cover"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cover_component",
    "message0": "Cover %1 Name: %2 %3 Id: %4 %5 Open action: %6 Open duration: %7 s %8 Close action: %9 Close duration: %10 s %11 Stop action: %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "component_id",
        "text": "cover id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "open_action",
        "check": "Cover_action"
      },
      {
        "type": "field_input",
        "name": "open_duration",
        "text": "open duration"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "close_action",
        "check": "Cover_action"
      },
      {
        "type": "field_input",
        "name": "close_duration",
        "text": "close duration"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Stop_action",
        "check": "Cover_action"
      }
    ],
    "previousStatement": "Cover",
    "nextStatement": "Cover",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cover_actions",
    "message0": "Cover Action %1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "action_list",
        "options": [
          [
            "Switch turn on",
            "switch.turn_on"
          ],
          [
            "Switch turn off",
            "switch.turn_off"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "switch_id",
        "text": "switch id"
      }
    ],
    "previousStatement": "Cover_action",
    "nextStatement": "Cover_action",
    "colour": 170,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ethernet",
    "message0": "Ethernet %1 Type: %2 %3 MDC pin: %4 %5 MDIO pin: %6 %7 Clock mode: %8 %9 Power pin: %10 %11 Manual ip: %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "LAN8720",
            "LAN8720"
          ],
          [
            "TLK110",
            "TLK110"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "mdc_pin",
        "text": "23"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "mdio_pin",
        "text": "18"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "clk_mode",
        "options": [
          [
            "GPIO17_OUT",
            "GPIO17_OUT"
          ],
          [
            "GPIO0_IN",
            "GPIO0_IN"
          ],
          [
            "GPIO0_OUT",
            "GPIO0_OUT"
          ],
          [
            "GPIO16_OUT",
            "GPIO16_OUT"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "power_pin",
        "text": "12"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "manual_ip",
        "check": "Ip"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ota",
    "message0": "OTA %1 Safe mode: %2 %3 Password: %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "safe_mode",
        "options": [
          [
            "True",
            "True"
          ],
          [
            "Flase",
            "False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "password",
        "text": "OTA password"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "switch",
    "message0": "Switch %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "switch_inputs",
        "check": "Switch"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 270,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dht",
    "message0": "DHT Sensor %1 Pin: %2 %3 Temperature name: %4 %5 %6 Send temperature data via CAN bus: %7 %8 %9 Humidity name: %10 %11 %12 Send humidity data via CAN bus: %13 %14 %15 Update interval: %16 s",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "ESP pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "temperature_name",
        "text": "livingroom temperature"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "temperature_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "temp_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "temp_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "humidity_name",
        "text": "livingroom humidity"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "humidity_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "hum_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "hum_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "update_interval",
        "text": "60"
      }
    ],
    "previousStatement": "Sensor",
    "nextStatement": "Sensor",
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sensor",
    "message0": "Sensor %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "sensor_inputs",
        "check": "Sensor"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mq_7",
    "message0": "MQ-7 %1 Pin: %2 %3 Id: %4 %5 %6 Send sensor value via CAN bus: %7 %8 %9 Update interval: %10 s",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "adc pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "mq7_id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "sensor_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "value_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "value_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "update_interval",
        "text": "60"
      }
    ],
    "previousStatement": "Sensor",
    "nextStatement": "Sensor",
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "beginner_light",
    "message0": "Control a Light %1 Board %2 Platfrom: %3 %4 Board: %5 %6 Pin: %7 %8 WiFi %9 SSID: %10 %11 Password: %12 %13 OTA %14 Password: %15 %16 API %17 Password: %18",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "cpu",
        "options": [
          [
            "ESP32",
            "ESP32"
          ],
          [
            "ESP8266",
            "ESP8266"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board",
        "options": [
          [
            "esp32-poe-iso",
            "esp32-poe-iso"
          ],
          [
            "esp32-poe",
            "esp32-poe"
          ],
          [
            "esp32cam",
            "esp32cam"
          ],
          [
            "wemos_d1_mini32",
            "wemos_d1_mini32"
          ],
          [
            "node32s",
            "node32s"
          ],
          [
            "nodemcu-32s",
            "nodemcu-32s"
          ],
          [
            "esp8266 d1",
            "d1"
          ],
          [
            "esp8266 d1_mini",
            "d1_mini"
          ],
          [
            "esp8266 d1_mini_lite",
            "d1_mini_lite"
          ],
          [
            "esp8266 d1_mini_pro",
            "d1_mini_pro"
          ],
          [
            "esp8266 nodemcu",
            "nodemcu"
          ],
          [
            "esp8266 nodemcuv2",
            "nodemcuv2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin",
        "text": "5"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ssid",
        "text": "SSID"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "wifi_password",
        "text": "wifi_password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ota_password",
        "text": "OTA password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "api_password",
        "text": "API password"
      }
    ],
    "colour": 120,
    "tooltip": "This block can only be used alone",
    "helpUrl": ""
  },
  {
    "type": "beginner_dht",
    "message0": "Temperature and Humidity Control With DHT %1 Board %2 Platfrom: %3 %4 Board: %5 %6 Pin: %7 %8 WiFi %9 SSID: %10 %11 Password: %12 %13 OTA %14 Password: %15 %16 API %17 Password: %18",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "cpu",
        "options": [
          [
            "ESP32",
            "ESP32"
          ],
          [
            "ESP8266",
            "ESP8266"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board",
        "options": [
          [
            "esp32-poe-iso",
            "esp32-poe-iso"
          ],
          [
            "esp32-poe",
            "esp32-poe"
          ],
          [
            "esp32cam",
            "esp32cam"
          ],
          [
            "wemos_d1_mini32",
            "wemos_d1_mini32"
          ],
          [
            "node32s",
            "node32s"
          ],
          [
            "nodemcu-32s",
            "nodemcu-32s"
          ],
          [
            "esp8266 d1",
            "d1"
          ],
          [
            "esp8266 d1_mini",
            "d1_mini"
          ],
          [
            "esp8266 d1_mini_lite",
            "d1_mini_lite"
          ],
          [
            "esp8266 d1_mini_pro",
            "d1_mini_pro"
          ],
          [
            "esp8266 nodemcu",
            "nodemcu"
          ],
          [
            "esp8266 nodemcuv2",
            "nodemcuv2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin",
        "text": "5"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ssid",
        "text": "SSID"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "wifi_password",
        "text": "wifi_password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ota_password",
        "text": "OTA password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "api_password",
        "text": "API password"
      }
    ],
    "colour": 120,
    "tooltip": "This block can only be used alone",
    "helpUrl": ""
  },
  {
    "type": "output",
    "message0": "Output %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "output",
        "check": "Output"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 340,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "output_component",
    "message0": "Output %1 Pin: %2 %3 Inverted: %4 %5 Id: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "esp_pin",
        "text": "esp pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "False",
            "false"
          ],
          [
            "True",
            "true"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "output id"
      }
    ],
    "previousStatement": "Output",
    "nextStatement": "Output",
    "colour": 320,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "output_pcf8574_component",
    "message0": "Output PCF8574 %1 PCF8574: %2 %3 %4 Inverted: %5 %6 Id: %7",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pcf8574_id",
        "text": "pcf8574 id"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "pin number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "True",
            "true"
          ],
          [
            "False",
            "false"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "output id"
      }
    ],
    "previousStatement": "Output",
    "nextStatement": "Output",
    "colour": 320,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "beginner_binary_sensor",
    "message0": "Binary Sensor %1 Board %2 Platfrom: %3 %4 Board: %5 %6 Pin: %7 %8 WiFi %9 SSID: %10 %11 Password: %12 %13 OTA %14 Password: %15 %16 API %17 Password: %18",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "cpu",
        "options": [
          [
            "ESP32",
            "ESP32"
          ],
          [
            "ESP8266",
            "ESP8266"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board",
        "options": [
          [
            "esp32-poe-iso",
            "esp32-poe-iso"
          ],
          [
            "esp32-poe",
            "esp32-poe"
          ],
          [
            "esp32cam",
            "esp32cam"
          ],
          [
            "wemos_d1_mini32",
            "wemos_d1_mini32"
          ],
          [
            "node32s",
            "node32s"
          ],
          [
            "nodemcu-32s",
            "nodemcu-32s"
          ],
          [
            "esp8266 d1",
            "d1"
          ],
          [
            "esp8266 d1_mini",
            "d1_mini"
          ],
          [
            "esp8266 d1_mini_lite",
            "d1_mini_lite"
          ],
          [
            "esp8266 d1_mini_pro",
            "d1_mini_pro"
          ],
          [
            "esp8266 nodemcu",
            "nodemcu"
          ],
          [
            "esp8266 nodemcuv2",
            "nodemcuv2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin",
        "text": "5"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ssid",
        "text": "SSID"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "wifi_password",
        "text": "wifi_password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ota_password",
        "text": "OTA password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "api_password",
        "text": "API password"
      }
    ],
    "colour": 120,
    "tooltip": "This block can only be used alone",
    "helpUrl": ""
  },
  {
    "type": "beginner_cover",
    "message0": "Control a Cover %1 Board %2 Platfrom: %3 %4 Board: %5 %6 Pin to open: %7 %8 Pin to close: %9 %10 Pin to stop: %11 %12 Open switch: %13 %14 Close switch: %15 %16 WiFi %17 SSID: %18 %19 Password: %20 %21 OTA %22 Password: %23 %24 API %25 Password: %26",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "cpu",
        "options": [
          [
            "ESP32",
            "ESP32"
          ],
          [
            "ESP8266",
            "ESP8266"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board",
        "options": [
          [
            "esp32-poe-iso",
            "esp32-poe-iso"
          ],
          [
            "esp32-poe",
            "esp32-poe"
          ],
          [
            "esp32cam",
            "esp32cam"
          ],
          [
            "wemos_d1_mini32",
            "wemos_d1_mini32"
          ],
          [
            "node32s",
            "node32s"
          ],
          [
            "nodemcu-32s",
            "nodemcu-32s"
          ],
          [
            "esp8266 d1",
            "d1"
          ],
          [
            "esp8266 d1_mini",
            "d1_mini"
          ],
          [
            "esp8266 d1_mini_lite",
            "d1_mini_lite"
          ],
          [
            "esp8266 d1_mini_pro",
            "d1_mini_pro"
          ],
          [
            "esp8266 nodemcu",
            "nodemcu"
          ],
          [
            "esp8266 nodemcuv2",
            "nodemcuv2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "open_pin",
        "text": "3"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "close_pin",
        "text": "4"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "stop_pin",
        "text": "5"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "open_switch_pin",
        "text": "13"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "close_switch_pin",
        "text": "14"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ssid",
        "text": "SSID"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "wifi_password",
        "text": "wifi_password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ota_password",
        "text": "OTA password"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "api_password",
        "text": "API password"
      }
    ],
    "colour": 120,
    "tooltip": "This block can only be used alone",
    "helpUrl": ""
  },
  {
    "type": "fan",
    "message0": "Fan %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "Fan",
        "check": "Fan"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 280,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "binary_fan_component",
    "message0": "Binary Fan %1 Name: %2 %3 Id: %4 %5 Output: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "component_id",
        "text": "fan id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "output id"
      }
    ],
    "previousStatement": "Fan",
    "nextStatement": "Fan",
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "switch_component",
    "message0": "Switch %1 Name: %2 %3 Pin: %4 %5 Inverted: %6 %7 Id: %8 %9 %10 Interlock: %11 interlock this: %12 with this: %13 %14 %15 Restore mode: %16",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "switch_name",
        "text": "switch name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "esp_pin",
        "text": "esp pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "True",
            "true"
          ],
          [
            "False",
            "false"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "switch id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "interlock_check",
        "checked": true
      },
      {
        "type": "field_input",
        "name": "interlock_name",
        "text": "interlock name"
      },
      {
        "type": "field_input",
        "name": "output_id1",
        "text": "switch id"
      },
      {
        "type": "field_input",
        "name": "output_id2",
        "text": "switch id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "restore_mode",
        "checked": true
      },
      {
        "type": "field_dropdown",
        "name": "restore_mode_list",
        "options": [
          [
            "Always OFF",
            "always_off"
          ],
          [
            "Always ON",
            "always_on"
          ],
          [
            "Restore default OFF",
            "restore_default_off"
          ],
          [
            "Restore default ON",
            "restore_ndefault_on"
          ]
        ]
      }
    ],
    "previousStatement": "Switch",
    "nextStatement": "Switch",
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "switch_pcf8574_component",
    "message0": "Switch PCF8574 %1 Name: %2 %3 PCF8574: %4 %5 %6 Inverted: %7 %8 Id: %9 %10 %11 Interlock: %12 interlock this: %13 with this: %14 %15 %16 Restore mode: %17",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "switch_name",
        "text": "switch name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pcf8574_id",
        "text": "pcf8574 id"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "pin number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "False",
            "false"
          ],
          [
            "True",
            "true"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "output_id",
        "text": "switch id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "interlock_check",
        "checked": true
      },
      {
        "type": "field_input",
        "name": "interlock_name",
        "text": "interlock name"
      },
      {
        "type": "field_input",
        "name": "output_id1",
        "text": "switch id"
      },
      {
        "type": "field_input",
        "name": "output_id2",
        "text": "switch id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "restore_mode",
        "checked": true
      },
      {
        "type": "field_dropdown",
        "name": "restore_mode_list",
        "options": [
          [
            "Always OFF",
            "always_off"
          ],
          [
            "Always ON",
            "always_on"
          ],
          [
            "Restore default OFF",
            "restore_default_off"
          ],
          [
            "Restore default ON",
            "restore_ndefault_on"
          ]
        ]
      }
    ],
    "previousStatement": "Switch",
    "nextStatement": "Switch",
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "binary_sensor_component",
    "message0": "Binary Sensor %1 Name: %2 %3 Id: %4 %5 Pin: %6 %7 Mode: %8 %9 Inverted: %10 %11 Automation: %12",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "binary_sensor_id",
        "text": "binary sensor id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "esp_pin",
        "text": "esp pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "input",
            "INPUT"
          ],
          [
            "input pullup",
            "INPUT_PULLUP"
          ],
          [
            "input pulldown",
            "INPUT_PULLDOWN"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "True",
            "True"
          ],
          [
            "False",
            "False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "automation_field",
        "check": "Automation"
      }
    ],
    "previousStatement": "Binary sensor",
    "nextStatement": "Binary sensor",
    "colour": 10,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "binary_sensor_pcf8574_component",
    "message0": "Binary Sensor PCF8574 %1 Name: %2 %3 Id: %4 %5 PCF8574: %6 %7 %8 Inverted: %9 %10 Automation: %11",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "Input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "binary_sensor_id",
        "text": "binary sensor id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pcf8574_id",
        "text": "pcf8574 id"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "pin number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "inverted",
        "options": [
          [
            "True",
            "True"
          ],
          [
            "False",
            "False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "automation_field",
        "check": "Automation"
      }
    ],
    "previousStatement": "Binary sensor",
    "nextStatement": "Binary sensor",
    "colour": 10,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "endstop_cover_component",
    "message0": "Endstop Cover %1 Name: %2 %3 Id: %4 %5 Open action: %6 Open duration: %7 s %8 Open endstop: %9 %10 Close action: %11 Close duration: %12 s %13 Close endstop: %14 %15 Stop action: %16",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "input_name",
        "text": "input name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "component_id",
        "text": "cover id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "open_action",
        "check": "Cover_action"
      },
      {
        "type": "field_input",
        "name": "open_duration",
        "text": "open duration"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "open_binary_sensor_id",
        "text": "binary sensor id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "close_action",
        "check": "Cover_action"
      },
      {
        "type": "field_input",
        "name": "close_duration",
        "text": "close duration"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "close_binary_sensor_id",
        "text": "binary sensor id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Stop_action",
        "check": "Cover_action"
      }
    ],
    "previousStatement": "Cover",
    "nextStatement": "Cover",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "restart_switch_component",
    "message0": "Restart Switch %1 Name: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "switch_name",
        "text": "switch name"
      }
    ],
    "previousStatement": "Switch",
    "nextStatement": "Switch",
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "shutdown_switch_component",
    "message0": "Shutdown Switch %1 Name: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "switch_name",
        "text": "switch name"
      }
    ],
    "previousStatement": "Switch",
    "nextStatement": "Switch",
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "can_bus",
    "message0": "CAN Bus %1 Id: %2 %3 Can id: %4 %5 Use extended id: %6 %7 CS pin: %8 %9 Bit rate: %10 %11 Clock: %12 %13 Mode: %14 %15 Automations %16 %17",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "CAN bus id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "extended_id",
        "options": [
          [
            "True",
            "True"
          ],
          [
            "False",
            "False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "cs_pin",
        "text": "5"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "bit_rate",
        "options": [
          [
            "500KBPS",
            "500KBPS"
          ],
          [
            "5KBPS",
            "5KBPS"
          ],
          [
            "10KBPS",
            "10KBPS"
          ],
          [
            "20KBPS",
            "20KBPS"
          ],
          [
            "31K25BPS",
            "31K25BPS"
          ],
          [
            "33KBPS",
            "33KBPS"
          ],
          [
            "40KBPS",
            "40KBPS"
          ],
          [
            "50KBPS",
            "50KBPS"
          ],
          [
            "80KBPS",
            "80KBPS"
          ],
          [
            "83K3BPS",
            "83K3BPS"
          ],
          [
            "95KBPS",
            "95KBPS"
          ],
          [
            "100KBPS",
            "100KBPS"
          ],
          [
            "125KBPS",
            "125KBPS"
          ],
          [
            "200KBPS",
            "200KBPS"
          ],
          [
            "250KBPS",
            "250KBPS"
          ],
          [
            "1000KBPS",
            "1000KBPS"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "clock",
        "options": [
          [
            "8MHZ",
            "8MHZ"
          ],
          [
            "16MHZ",
            "16MHZ"
          ],
          [
            "20MHZ",
            "20MHZ"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "NORMAL",
            "NORMAL"
          ],
          [
            "LOOPBACK",
            "LOOPBACK"
          ],
          [
            "LISTENONLY",
            "LISTENONLY"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "automations",
        "check": "CAN_bus_action"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "can_bus_action",
    "message0": "CAN bus Receive Action %1 Can id: %2 %3 Action: %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "action_list",
        "options": [
          [
            "Switch toggle",
            "switch.toggle"
          ],
          [
            "Switch turn on",
            "switch.turn_on"
          ],
          [
            "Switch turn off",
            "switch.turn_off"
          ],
          [
            "Cover open",
            "cover.open"
          ],
          [
            "Cover close",
            "cover.close"
          ],
          [
            "Cover stop",
            "cover.stop"
          ],
          [
            "Light toggle",
            "light.toggle"
          ],
          [
            "Light turn on",
            "light.turn_on"
          ],
          [
            "Light turn off",
            "light.turn_off"
          ],
          [
            "Fan toggle",
            "fan.toggle"
          ],
          [
            "Fan turn on",
            "fan.turn_on"
          ],
          [
            "Fan turn off",
            "fan.turn_off"
          ],
          [
            "Receive sensor data",
            "receive_sensor_data"
          ],
          [
            "Logger",
            "logger.log"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "id"
      }
    ],
    "previousStatement": "CAN_bus_action",
    "nextStatement": "CAN_bus_action",
    "colour": 305,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "si7021",
    "message0": "SI7021 Sensor %1 Temperature name: %2 %3 %4 Send temperature data via CAN bus: %5 %6 %7 Humidity name: %8 %9 %10 Send humidity data via CAN bus: %11 %12 %13 Update interval: %14 s",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "temperature_name",
        "text": "livingroom temperature"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "temperature_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "temp_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "temp_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "humidity_name",
        "text": "livingroom humidity"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "humidity_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "hum_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "hum_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "update_interval",
        "text": "60"
      }
    ],
    "previousStatement": "Sensor",
    "nextStatement": "Sensor",
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "bmp280",
    "message0": "BMP280 Sensor %1 Temperature name: %2 %3 %4 Send temperature data via CAN bus: %5 %6 %7 Pressure name: %8 %9 %10 Send pressure data via CAN bus: %11 %12 %13 Address: %14 %15 Update interval: %16 s",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "temperature_name",
        "text": "outside temperature"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "temperature_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "temp_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "temp_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pressure_name",
        "text": "outside pressure"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "pressure_data",
        "checked": false
      },
      {
        "type": "field_input",
        "name": "press_can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "field_input",
        "name": "press_can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "address",
        "options": [
          [
            "0x77",
            "0x77"
          ],
          [
            "0x76",
            "0x76"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "update_interval",
        "text": "60"
      }
    ],
    "previousStatement": "Sensor",
    "nextStatement": "Sensor",
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "spi",
    "message0": "SPI %1 Clock pin: %2 %3 Mosi pin: %4 %5 Miso pin: %6 %7 Id: %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "clck_pin",
        "text": "14"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "mosi_pin",
        "text": "2"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "miso_pin",
        "text": "15"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "spi_bus"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pir",
    "message0": "PIR Sensor %1 Name: %2 %3 Id: %4 %5 Pin: %6 %7 On detection: %8 On non detection: %9",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": "sensor name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "pir_id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "esp pin"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "on_detection",
        "check": "Action"
      },
      {
        "type": "input_statement",
        "name": "on_non_detection",
        "check": "Action"
      }
    ],
    "previousStatement": "Binary sensor",
    "nextStatement": "Binary sensor",
    "colour": 10,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pir_pcf8574",
    "message0": "PIR Sensor PCF8574 %1 Name: %2 %3 Id: %4 %5 PCF8574: %6 %7 %8 On detection: %9 On non detection: %10",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "name",
        "text": "sensor name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "id",
        "text": "pir_id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "pcf8574_id",
        "text": "pcf8574 id"
      },
      {
        "type": "field_input",
        "name": "pin_number",
        "text": "pin number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "on_detection",
        "check": "Action"
      },
      {
        "type": "input_statement",
        "name": "on_non_detection",
        "check": "Action"
      }
    ],
    "previousStatement": "Binary sensor",
    "nextStatement": "Binary sensor",
    "colour": 10,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "can_bus_send_action",
    "message0": "CAN bus Send Action %1 Can bus id: %2 %3 Can id: %4 %5 Data: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "can_bus_id",
        "text": "CAN bus id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "can_id",
        "text": "CAN id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "data",
        "text": "data to transmit"
      }
    ],
    "previousStatement": "Action",
    "nextStatement": "Action",
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "on_click_component",
    "message0": "On Click %1 Min length: %2 s %3 Max length: %4 s %5 Then: %6",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_input",
        "name": "min_length",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "max_length",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "on_click_action",
        "check": "Action"
      }
    ],
    "previousStatement": "On_click",
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "on_double_click_component",
    "message0": "On Double Click %1 Min length: %2 s %3 Max length: %4 s %5 Then: %6",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_input",
        "name": "min_length",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "max_length",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "double_click_action",
        "check": "Action"
      }
    ],
    "previousStatement": "On_double_click",
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "on_multi_click_component",
    "message0": "On Multi Click %1 Double click: %2 ON for at most %3 s %4 OFF for at most %5 s %6 ON for at most %7 s %8 OFF for at least %9 s %10 Then: %11 Single long click: %12 ON for %13 s to %14 s %15 OFF for at least %16 s %17 Then: %18 Single short click: %19 ON for %20 s to %21 s %22 OFF for at least %23 s %24 Then: %25",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "dc_on1",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "dc_off1",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "dc_on2",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "dc_off2",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Double_click_action",
        "check": "Action"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "sl_on1",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "sl_on2",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "sl_off1",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Single_long_click_action",
        "check": "Action"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ss_on1",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "ss_on2",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "ss_off1",
        "text": "0"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Single_short_click_action",
        "check": "Action"
      }
    ],
    "previousStatement": "On_multi_click",
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "binary_sensor_automation",
    "message0": "Automations: %1 On Click: %2 On Double Click: %3 On Multi Click: %4 On Press: %5 On Release: %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "automation_field_on_click",
        "check": "On_click"
      },
      {
        "type": "input_statement",
        "name": "automation_field_on_double_click",
        "check": "On_double_click"
      },
      {
        "type": "input_statement",
        "name": "automation_field_on_multi_click",
        "check": "On_multi_click"
      },
      {
        "type": "input_statement",
        "name": "automation_field_on_press",
        "check": "Action"
      },
      {
        "type": "input_statement",
        "name": "automation_field_on_release",
        "check": "Action"
      }
    ],
    "output": "Automation",
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "template_sensor",
    "message0": "Template Sensor %1 Name: %2 %3 Id: %4 %5 Unit of measurement: %6 %7 Device class: %8 %9 Update interval: %10 s",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "value_name",
        "text": "value name"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "sensor_id",
        "text": "sensor id"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "unit_of_measurement",
        "options": [
          [
            "ºC",
            "ºC"
          ],
          [
            "ºF",
            "ºF"
          ],
          [
            "%",
            "%"
          ],
          [
            "hPa",
            "hPa"
          ],
          [
            "mbar",
            "mbar"
          ],
          [
            "lx",
            "lx"
          ],
          [
            "lm",
            "lm"
          ],
          [
            "CO",
            "CO"
          ],
          [
            "CO2",
            "CO2"
          ],
          [
            "V",
            "V"
          ],
          [
            "A",
            "A"
          ],
          [
            "Wh",
            "Wh"
          ],
          [
            "kWh",
            "kWh"
          ],
          [
            "W",
            "W"
          ],
          [
            "kW",
            "kW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "device_class",
        "options": [
          [
            "Temperature",
            "temperature"
          ],
          [
            "Humidity",
            "humidity"
          ],
          [
            "Pressure",
            "pressure"
          ],
          [
            "Illuminance",
            "illuminance"
          ],
          [
            "Carbon monoxide",
            "carbon_monoxide"
          ],
          [
            "Carbon dioxide",
            "carbon_dioxide"
          ],
          [
            "Battery",
            "battery"
          ],
          [
            "Voltage",
            "voltage"
          ],
          [
            "Current",
            "current"
          ],
          [
            "Energy",
            "energy"
          ],
          [
            "Power",
            "power"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "update_interval",
        "text": "60"
      }
    ],
    "previousStatement": "Sensor",
    "nextStatement": "Sensor",
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "api",
    "message0": "API %1 API password: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "api_password",
        "text": "API password"
      }
    ],
    "previousStatement": "Main",
    "nextStatement": "Main",
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  }]
);