Blockly.JavaScript['device'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_cpu = block.getFieldValue('cpu');
  var dropdown_board = block.getFieldValue('board');
  // TODO: Assemble JavaScript into code variable.
  var code = 'esphome:\n'  
  +'  name: '+text_name+'\n'
  +'  platform: '+dropdown_cpu+'\n'
  +'  board: '+dropdown_board+'\n';
  return code;
};

Blockly.JavaScript['wifi'] = function(block) {
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  var value_manual_ip = Blockly.JavaScript.valueToCode(block, 'manual_ip', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'wifi:\n'
  +'  ssid: "'+text_ssid+'"\n'
  +'  password: "'+text_password+'"\n'
  +''+value_manual_ip+'';
  return code;
};

Blockly.JavaScript['manual_ip'] = function(block) {
  var number_ip_1 = block.getFieldValue('ip_1');
  var number_ip_2 = block.getFieldValue('ip_2');
  var number_ip_3 = block.getFieldValue('ip_3');
  var number_ip_4 = block.getFieldValue('ip_4');
  var number_gatew_1 = block.getFieldValue('gatew_1');
  var number_gatew_2 = block.getFieldValue('gatew_2');
  var number_gatew_3 = block.getFieldValue('gatew_3');
  var number_gatew_4 = block.getFieldValue('gatew_4');
  var number_subn_1 = block.getFieldValue('subn_1');
  var number_subn_2 = block.getFieldValue('subn_2');
  var number_subn_3 = block.getFieldValue('subn_3');
  var number_subn_4 = block.getFieldValue('subn_4');
  // TODO: Assemble JavaScript into code variable.
  var code = '  manual_ip:\n'
  +'    static_ip: '+number_ip_1+'.'+number_ip_2+'.'+number_ip_3+'.'+number_ip_4+'\n'
  +'    gateway: '+number_gatew_1+'.'+number_gatew_2+'.'+number_gatew_3+'.'+number_gatew_4+'\n'
  +'    subnet: '+number_subn_1+'.'+number_subn_2+'.'+number_subn_3+'.'+number_subn_4+'\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logger'] = function(block) {
  var dropdown_level = block.getFieldValue('level');
  var value_logs = Blockly.JavaScript.valueToCode(block, 'logs', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code = 'logger:\n'
   +'  level: '+dropdown_level+'\n';
   return code;
};



Blockly.JavaScript['i2c'] = function(block) {
  var text_sda_pin = block.getFieldValue('sda_pin');
  var text_scl_pin = block.getFieldValue('scl_pin');
  var dropdown_scan = block.getFieldValue('scan');
  var text_id = block.getFieldValue('id');
  // TODO: Assemble JavaScript into code variable.
  var code = 'i2c:\n'
  +'  sda: '+text_sda_pin+'\n'
  +'  scl: '+text_scl_pin+'\n'
  +'  scan: '+dropdown_scan+'\n'
  +'  id: '+text_id+'\n';
  return code;
};

Blockly.JavaScript['web_server'] = function(block) {
  var text_port = block.getFieldValue('port');
  // TODO: Assemble JavaScript into code variable.
  var code = 'web_server:\n'
  +'  port: '+text_port+'\n';
  return code;
};

Blockly.JavaScript['pcf8574'] = function(block) {
  var checkbox_0x20 = block.getFieldValue('0x20') == 'TRUE';
  var text_0x20_id = block.getFieldValue('0x20_id');
  var checkbox_0x21 = block.getFieldValue('0x21') == 'TRUE';
  var text_0x21_id = block.getFieldValue('0x21_id');
  var checkbox_0x22 = block.getFieldValue('0x22') == 'TRUE';
  var text_0x22_id = block.getFieldValue('0x22_id');
  var checkbox_0x23 = block.getFieldValue('0x23') == 'TRUE';
  var text_0x23_id = block.getFieldValue('0x23_id');
  var checkbox_0x24 = block.getFieldValue('0x24') == 'TRUE';
  var text_0x24_id = block.getFieldValue('0x24_id');
  var checkbox_0x25 = block.getFieldValue('0x25') == 'TRUE';
  var text_0x25_id = block.getFieldValue('0x25_id');
  var checkbox_0x26 = block.getFieldValue('0x26') == 'TRUE';
  var text_0x26_id = block.getFieldValue('0x26_id');
  var checkbox_0x27 = block.getFieldValue('0x27') == 'TRUE';
  var text_0x27_id = block.getFieldValue('0x27_id');
  // TODO: Assemble JavaScript into code variable.
  if (checkbox_0x20 || checkbox_0x21 || checkbox_0x22 || checkbox_0x23 || checkbox_0x24 || checkbox_0x25 || checkbox_0x26 || checkbox_0x27){
  var code = 'pcf8574:\n'
  if (checkbox_0x20){
    var code = code + '  - id: "'+text_0x20_id+'"\n'
    +'    address: 0x20\n';
  }
  if (checkbox_0x21){
    var code = code + '  - id: "'+text_0x21_id+'"\n'
    +'    address: 0x21\n';
  }
  if (checkbox_0x22){
    var code = code + '  - id: "'+text_0x22_id+'"\n'
    +'    address: 0x22\n';
  }
  if (checkbox_0x23){
    var code = code + '  - id: "'+text_0x23_id+'"\n'
    +'    address: 0x23\n';
  }
  if (checkbox_0x24){
    var code = code + '  - id: "'+text_0x24_id+'"\n'
    +'    address: 0x24\n';
  }
  if (checkbox_0x25){
    var code = code + '  - id: "'+text_0x25_id+'"\n'
    +'    address: 0x25\n';
  }
  if (checkbox_0x26){
    var code = code + '  - id: "'+text_0x26_id+'"\n'
    +'    address: 0x26\n';
  }
  if (checkbox_0x27){
    var code = code + '  - id: "'+text_0x27_id+'"\n'
    +'    address: 0x27\n';
  }
}
else{
  var code = '';
}
  return code;
};

Blockly.JavaScript['binary_sensor'] = function(block) {
  var statements_binary_sensor = Blockly.JavaScript.statementToCode(block, 'binary_sensor');
  // TODO: Assemble JavaScript into code variable.
  var code = 'binary_sensor:\n'
  +''+statements_binary_sensor+'';
  return code;
};

Blockly.JavaScript['on_click_component'] = function(block) {
  var text_min_length = block.getFieldValue('min_length');
  var text_max_length = block.getFieldValue('max_length');
  var statements_on_click_action = Blockly.JavaScript.statementToCode(block, 'on_click_action');
  // TODO: Assemble JavaScript into code variable.
  var code = '    min_length: '+text_min_length+'s\n'
  +'    max_length: '+text_max_length+'s\n'
  +'    then:\n'
  +''+statements_on_click_action+'';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['on_double_click_component'] = function(block) {
  var text_min_length = block.getFieldValue('min_length');
  var text_max_length = block.getFieldValue('max_length');
  var statements_double_click_action = Blockly.JavaScript.statementToCode(block, 'double_click_action');
  // TODO: Assemble JavaScript into code variable.
  var code = '    min_length: '+text_min_length+'s\n'
  +'    max_length: '+text_max_length+'s\n'
  +'    then:\n'
  +''+statements_double_click_action+'';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['on_multi_click_component'] = function(block) {
  var text_dc_on1 = block.getFieldValue('dc_on1');
  var text_dc_off1 = block.getFieldValue('dc_off1');
  var text_dc_on2 = block.getFieldValue('dc_on2');
  var text_dc_off2 = block.getFieldValue('dc_off2');
  var statements_double_click_action = Blockly.JavaScript.statementToCode(block, 'Double_click_action');
  var text_sl_on1 = block.getFieldValue('sl_on1');
  var text_sl_on2 = block.getFieldValue('sl_on2');
  var text_sl_off1 = block.getFieldValue('sl_off1');
  var statements_single_long_click_action = Blockly.JavaScript.statementToCode(block, 'Single_long_click_action');
  var text_ss_on1 = block.getFieldValue('ss_on1');
  var text_ss_on2 = block.getFieldValue('ss_on2');
  var text_ss_off1 = block.getFieldValue('ss_off1');
  var statements_single_short_click_action = Blockly.JavaScript.statementToCode(block, 'Single_short_click_action');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - timing:\n'
  +'      - ON for at most '+text_dc_on1+'s\n'
  +'      - OFF for at most '+text_dc_off1+'s\n'
  +'      - ON for at most '+text_dc_on2+'s\n'
  +'      - OFF for at least '+text_dc_off2+'s\n'
  +'    then:\n'
  +''+statements_double_click_action+''
  +'  - timing:\n'
  +'      - ON for '+text_sl_on1+'s to '+text_sl_on2+'s\n'
  +'      - OFF for at least '+text_sl_off1+'s\n'
  +'    then:\n'
  +''+statements_single_long_click_action+''
  +'  - timing:\n'
  +'      - ON for '+text_ss_on1+'s to '+text_ss_on2+'s\n'
  +'      - OFF for at least '+text_ss_off1+'s\n'
  +'    then:\n'
  +''+statements_single_short_click_action+'';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['actions'] = function(block) {
  var dropdown_action_list = block.getFieldValue('action_list');
  var text_id = block.getFieldValue('id');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_action_list == 'logger.log'){
    var code ='      - '+dropdown_action_list+': "'+text_id+'"\n';
  }
  else {
    var code ='      - '+dropdown_action_list+': '+text_id+'\n';
  }
  return code;
};

Blockly.JavaScript['light'] = function(block) {
  var statements_light = Blockly.JavaScript.statementToCode(block, 'light');
  // TODO: Assemble JavaScript into code variable.
  var code = 'light:\n'
  +''+statements_light+'';
  return code;
};

Blockly.JavaScript['light_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_output_id = block.getFieldValue('output_id');
  var text_component_id = block.getFieldValue('component_id');
  var checkbox_restore_mode = block.getFieldValue('restore_mode') == 'TRUE';
  var dropdown_restore_mode_list = block.getFieldValue('restore_mode_list');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: binary\n'
  +'    name: "'+text_input_name+'"\n'
  +'    output: '+text_output_id+'\n'
  +'    id: '+text_component_id+'\n';
  if (checkbox_restore_mode){
  code = code + '    restore_mode: '+dropdown_restore_mode_list+'\n';
  }
  return code;
};

Blockly.JavaScript['cover'] = function(block) {
  var statements_cover = Blockly.JavaScript.statementToCode(block, 'cover');
  // TODO: Assemble JavaScript into code variable.
  var code = 'cover:\n'
  +''+statements_cover+'';
  return code;
};

Blockly.JavaScript['cover_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_component_id = block.getFieldValue('component_id');
  var statements_open_action = Blockly.JavaScript.statementToCode(block, 'open_action');
  var text_open_duration = block.getFieldValue('open_duration');
  var statements_close_action = Blockly.JavaScript.statementToCode(block, 'close_action');
  var text_close_duration = block.getFieldValue('close_duration');
  var statements_stop_action = Blockly.JavaScript.statementToCode(block, 'Stop_action');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: time_based\n'
  +'    name: "'+text_input_name+'"\n'
  +'    id: '+text_component_id+'\n'
  +'    open_action:\n'
  +''+statements_open_action+''
  +'    open_duration: '+text_open_duration+'sec\n'
  +'    close_action:\n'
  +''+statements_close_action+''
  +'    close_duration: '+text_close_duration+'sec\n'
  +'    stop_action:\n'
  +''+statements_stop_action+'';
  return code;
};

Blockly.JavaScript['cover_actions'] = function(block) {
  var dropdown_action_list = block.getFieldValue('action_list');
  var text_switch_id = block.getFieldValue('switch_id');
  // TODO: Assemble JavaScript into code variable.
  var code = '      - '+dropdown_action_list+': '+text_switch_id+'\n';
  return code;
};

Blockly.JavaScript['ethernet'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_mdc_pin = block.getFieldValue('mdc_pin');
  var text_mdio_pin = block.getFieldValue('mdio_pin');
  var dropdown_clk_mode = block.getFieldValue('clk_mode');
  var text_power_pin = block.getFieldValue('power_pin');
  var value_manual_ip = Blockly.JavaScript.valueToCode(block, 'manual_ip', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ethernet:\n'
  +'  type: '+dropdown_type+'\n'
  +'  mdc_pin: '+text_mdc_pin+'\n'
  +'  mdio_pin: '+text_mdio_pin+'\n'
  +'  clk_mode: '+dropdown_clk_mode+'\n'
  +'  power_pin: '+text_power_pin+'\n'
  +''+value_manual_ip+'';
  return code;
};

Blockly.JavaScript['ota'] = function(block) {
  var dropdown_safe_mode = block.getFieldValue('safe_mode');
  var text_password = block.getFieldValue('password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ota:\n'
  +'  safe_mode: '+dropdown_safe_mode+'\n'
  +'  password: '+text_password+'\n';
  return code;
};

Blockly.JavaScript['switch_component'] = function(block) {
  var text_switch_name = block.getFieldValue('switch_name');
  var text_esp_pin = block.getFieldValue('esp_pin');
  var dropdown_inverted = block.getFieldValue('inverted');
  var text_output_id = block.getFieldValue('output_id');
  var checkbox_interlock_check = block.getFieldValue('interlock_check') == 'TRUE';
  var text_interlock_name = block.getFieldValue('interlock_name');
  var text_output_id1 = block.getFieldValue('output_id1');
  var text_output_id2 = block.getFieldValue('output_id2');
  var checkbox_restore_mode = block.getFieldValue('restore_mode') == 'TRUE';
  var dropdown_restore_mode_list = block.getFieldValue('restore_mode_list');
  // TODO: Assemble JavaScript into code variable.
  var code =  '  - platform: gpio\n'
  +'    name: "'+text_switch_name+'"\n'
  +'    pin: '+text_esp_pin+'\n'
  +'    inverted: '+dropdown_inverted+'\n'
  +'    id: '+text_output_id+'\n';

  if (checkbox_interlock_check){
  var code = code + '    interlock:\n'
  +'      &'+text_interlock_name+' ['+text_output_id1+', '+text_output_id2+']\n';
  }
  if (checkbox_restore_mode){
  var code = code + '    restore_mode: '+dropdown_restore_mode_list+'\n';
  }
  return code;
};

Blockly.JavaScript['switch'] = function(block) {
  var statements_switch_inputs = Blockly.JavaScript.statementToCode(block, 'switch_inputs');
  // TODO: Assemble JavaScript into code variable.
  var code = 'switch:\n'
  +''+statements_switch_inputs+'';
  return code;
};

Blockly.JavaScript['binary_sensor_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_binary_sensor_id = block.getFieldValue('binary_sensor_id');
  var text_esp_pin = block.getFieldValue('esp_pin');
  var dropdown_mode = block.getFieldValue('mode');
  var dropdown_inverted = block.getFieldValue('inverted');
  var value_automation_field = Blockly.JavaScript.valueToCode(block, 'automation_field', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  '  - platform: gpio\n'
  +'    name: "'+text_input_name+'"\n'
  +'    id: '+text_binary_sensor_id+'\n'
  +'    pin:\n'
  +'      number: '+text_esp_pin+'\n'
  +'      inverted: '+dropdown_inverted+'\n'
  +'      mode: '+dropdown_mode+'\n'
  +''+value_automation_field+'';
  return code;
};

Blockly.JavaScript['dht'] = function(block) {
  var text_pin_number = block.getFieldValue('pin_number');
  var text_temperature_name = block.getFieldValue('temperature_name');
  var checkbox_temperature_data = block.getFieldValue('temperature_data') == 'TRUE';
  var text_temp_can_bus_id = block.getFieldValue('temp_can_bus_id');
  var text_temp_can_id = block.getFieldValue('temp_can_id');
  var text_humidity_name = block.getFieldValue('humidity_name');
  var checkbox_humidity_data = block.getFieldValue('humidity_data') == 'TRUE';
  var text_hum_can_bus_id = block.getFieldValue('hum_can_bus_id');
  var text_hum_can_id = block.getFieldValue('hum_can_id');
  var text_update_interval = block.getFieldValue('update_interval');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: dht\n'
  +'    pin: '+text_pin_number+'\n'
  +'    temperature:\n'
  +'      name: "'+text_temperature_name+'"\n';
  if (checkbox_temperature_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_temp_can_bus_id+'\n'
    +'            can_id: '+text_temp_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';
  }
  code = code + '    humidity:\n'
  + '      name: "'+text_humidity_name+'"\n';
  if (checkbox_humidity_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_hum_can_bus_id+'\n'
    +'            can_id: '+text_hum_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';;
  }
  code = code + '    update_interval: '+text_update_interval+'s\n';
  return code;
};

Blockly.JavaScript['sensor'] = function(block) {
  var statements_sensor_inputs = Blockly.JavaScript.statementToCode(block, 'sensor_inputs');
  // TODO: Assemble JavaScript into code variable.
  var code = 'sensor:\n'
  +''+statements_sensor_inputs+'';
  return code;
};

Blockly.JavaScript['mq_7'] = function(block) {
  var text_pin_number = block.getFieldValue('pin_number');
  var text_id = block.getFieldValue('id');
  var checkbox_sensor_data = block.getFieldValue('sensor_data') == 'TRUE';
  var text_value_can_bus_id = block.getFieldValue('value_can_bus_id');
  var text_value_can_id = block.getFieldValue('value_can_id');
  var text_update_interval = block.getFieldValue('update_interval');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: adc\n'
  +'    pin: '+text_pin_number+'\n'
  +'    name: "MQ-7 (raw)"\n'
  +'    id: '+text_id+'\n'
  +'    internal: True\n'
  +'  - platform: template\n'
  +'    name: "MQ-7"\n';
  if (checkbox_sensor_data){
    code = code + '    on_value:\n'
    +'      - canbus.send:\n'
    +'          canbus_id: '+text_value_can_bus_id+'\n'
    +'          can_id: '+text_value_can_id+'\n'
    +'          data: !lambda |-\n'
    +'              static union myval {\n'
    +'                float fl;\n'
    +'                uint8_t my_bytes[4];\n'
    +'              } my_union_test;\n'
    +'              my_union_test.fl = x;\n'
    +'              return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';;
  }
  code = code + '    lambda: |-\n'
  +'      return (id('+text_id+').state*1024/5);\n'
  +'    unit_of_measurement: ppm\n'
  +'    icon: mdi:fire\n'
  +'    update_interval: '+text_update_interval+'s\n';
  return code;
};

Blockly.JavaScript['beginner_light'] = function(block) {
  var dropdown_cpu = block.getFieldValue('cpu');
  var dropdown_board = block.getFieldValue('board');
  var text_pin = block.getFieldValue('pin');
  var text_ssid = block.getFieldValue('ssid');
  var text_wifi_password = block.getFieldValue('wifi_password');
  var text_ota_password = block.getFieldValue('ota_password');
  var text_api_password = block.getFieldValue('api_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'esphome:\n'  
  +'  name: lightcontrol\n'
  +'  platform: '+dropdown_cpu+'\n'
  +'  board: '+dropdown_board+'\n'
  +'wifi:\n'
  +'  ssid: "'+text_ssid+'"\n'
  +'  password: "'+text_wifi_password+'"\n'
  +'logger:\n'
  +'ota:\n'
  +'  password: "'+text_ota_password+'"\n'
  +'api:\n'
  +'  password: "'+text_api_password+'"\n'
  +'light:\n'
  +'  - platform: binary\n'
  +'    name: "Light"\n'
  +'    output: output_component1\n'
  +'output:\n'
  +'  - platform: gpio\n'
  +'    pin: '+text_pin+'\n'
  +'    id: output_component1\n';
  return code;
};

Blockly.JavaScript['beginner_dht'] = function(block) {
  var dropdown_cpu = block.getFieldValue('cpu');
  var dropdown_board = block.getFieldValue('board');
  var text_pin = block.getFieldValue('pin');
  var text_ssid = block.getFieldValue('ssid');
  var text_wifi_password = block.getFieldValue('wifi_password');
  var text_ota_password = block.getFieldValue('ota_password');
  var text_api_password = block.getFieldValue('api_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'esphome:\n'  
  +'  name: dht\n'
  +'  platform: '+dropdown_cpu+'\n'
  +'  board: '+dropdown_board+'\n'
  +'wifi:\n'
  +'  ssid: "'+text_ssid+'"\n'
  +'  password: "'+text_wifi_password+'"\n'
  +'logger:\n'
  +'ota:\n'
  +'  password: "'+text_ota_password+'"\n'
  +'api:\n'
  +'  password: "'+text_api_password+'"\n'
  +'sensor:\n'
  +'  - platform: dht\n'
  +'    pin: '+text_pin+'\n'
  +'    temperature:\n'
  +'      name: Temperature\n'
  +'    humidity:\n'
  +'      name: Humidity\n'
  +'    update_interval: 5s\n';
  return code;
};

Blockly.JavaScript['output'] = function(block) {
  var statements_output = Blockly.JavaScript.statementToCode(block, 'output');
  // TODO: Assemble JavaScript into code variable.
  var code = 'output:\n'
  +''+statements_output+'';
  return code;
};

Blockly.JavaScript['output_component'] = function(block) {
  var text_esp_pin = block.getFieldValue('esp_pin');
  var dropdown_inverted = block.getFieldValue('inverted');
  var text_output_id = block.getFieldValue('output_id');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: gpio \n'
  +'    pin: '+text_esp_pin+'\n'
  +'    inverted: '+dropdown_inverted+'\n'
  +'    id: '+text_output_id+'\n';
  return code;
};

Blockly.JavaScript['output_pcf8574_component'] = function(block) {
  var text_pcf8574_id = block.getFieldValue('pcf8574_id');
  var text_pin_number = block.getFieldValue('pin_number');
  var dropdown_inverted = block.getFieldValue('inverted');
  var text_output_id = block.getFieldValue('output_id');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: gpio \n'
  +'    pin:\n'
  +'      pcf8574: '+text_pcf8574_id+'\n'
  +'      number: '+text_pin_number+'\n'
  +'      inverted: '+dropdown_inverted+'\n'
  +'    id: '+text_output_id+'\n';
  return code;
};

Blockly.JavaScript['beginner_binary_sensor'] = function(block) {
  var dropdown_cpu = block.getFieldValue('cpu');
  var dropdown_board = block.getFieldValue('board');
  var text_pin = block.getFieldValue('pin');
  var text_ssid = block.getFieldValue('ssid');
  var text_wifi_password = block.getFieldValue('wifi_password');
  var text_ota_password = block.getFieldValue('ota_password');
  var text_api_password = block.getFieldValue('api_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'esphome:\n'  
  +'  name: binarysensor\n'
  +'  platform: '+dropdown_cpu+'\n'
  +'  board: '+dropdown_board+'\n'
  +'wifi:\n'
  +'  ssid: "'+text_ssid+'"\n'
  +'  password: "'+text_wifi_password+'"\n'
  +'logger:\n'
  +'ota:\n'
  +'  password: "'+text_ota_password+'"\n'
  +'api:\n'
  +'  password: "'+text_api_password+'"\n'
  +'binary_sensor:\n'
  +'  - platform: gpio\n'
  +'    name: "Binary Sensor"\n'
  +'    pin: '+text_pin+'\n'
  +'    filters:\n'
  +'      - invert:\n';
  return code;
};

Blockly.JavaScript['beginner_cover'] = function(block) {
  var dropdown_cpu = block.getFieldValue('cpu');
  var dropdown_board = block.getFieldValue('board');
  var text_open_pin = block.getFieldValue('open_pin');
  var text_close_pin = block.getFieldValue('close_pin');
  var text_stop_pin = block.getFieldValue('stop_pin');
  var text_open_switch_pin = block.getFieldValue('open_switch_pin');
  var text_close_switch_pin = block.getFieldValue('close_switch_pin');
  var text_ssid = block.getFieldValue('ssid');
  var text_wifi_password = block.getFieldValue('wifi_password');
  var text_ota_password = block.getFieldValue('ota_password');
  var text_api_password = block.getFieldValue('api_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'esphome:\n'  
  +'  name: covercontrol\n'
  +'  platform: '+dropdown_cpu+'\n'
  +'  board: '+dropdown_board+'\n'
  +'wifi:\n'
  +'  ssid: "'+text_ssid+'"\n'
  +'  password: "'+text_wifi_password+'"\n'
  +'logger:\n'
  +'ota:\n'
  +'  password: "'+text_ota_password+'"\n'
  +'api:\n'
  +'  password: "'+text_api_password+'"\n'
  +'binary_sensor:\n'
  +'    - platform: gpio\n'
  +'      name: "Open Cover"\n'
  +'      pin:\n'
  +'        number: '+text_open_pin+'\n'
  +'        inverted: True\n'
  +'        mode: INPUT_PULLUP\n'
  +'      on_click:\n'
  +'        min_length: 0s\n'
  +'        max_length: 0.5s\n'
  +'        then:\n'
  +'            - cover.open: first_cover\n'
  +'    - platform: gpio\n'
  +'      name: "Close Cover"\n'
  +'      pin:\n'
  +'        number: '+text_close_pin+'\n'
  +'        inverted: True\n'
  +'        mode: INPUT_PULLUP\n'
  +'      on_click:\n'
  +'        min_length: 0s\n'
  +'        max_length: 0.5s\n'
  +'        then:\n'
  +'            - cover.close: first_cover\n'
  +'    - platform: gpio\n'
  +'      name: "Stop Cover"\n'
  +'      pin:\n'
  +'        number: '+text_stop_pin+'\n'
  +'        inverted: True\n'
  +'        mode: INPUT_PULLUP\n'
  +'      on_click:\n'
  +'        min_length: 0s\n'
  +'        max_length: 0.5s\n'
  +'        then:\n'
  +'            - cover.stop: first_cover\n'
  +'cover:\n'
  +'  - platform: time_based\n'
  +'    name: "Cover"\n'
  +'    id: first_cover\n'
  +'    open_action:\n'
  +'      - switch.turn_on: open_cover\n'
  +'    open_duration: 5sec\n'
  +'    close_action:\n'
  +'      - switch.turn_on: close_cover\n'
  +'    close_duration: 5sec\n'
  +'    stop_action:\n'
  +'      - switch.turn_off: open_cover\n'
  +'      - switch.turn_off: close_cover\n'
  +'switch:\n'
  +'  - platform: gpio\n'
  +'    name: "Open Switch"\n'
  +'    pin: '+text_open_switch_pin+'\n'
  +'    id: open_cover\n'
  +'    interlock: &interlockcover [open_cover, close_cover]\n'
  +'    restore_mode: always off\n' 
  +'  - platform: gpio\n'
  +'    name: "Close Switch"\n'
  +'    pin: '+text_close_switch_pin+'\n'
  +'    id: close_cover\n'
  +'    interlock: *interlockcover\n'
  +'    restore_mode: always off\n';
  return code;
};

Blockly.JavaScript['fan'] = function(block) {
  var statements_fan = Blockly.JavaScript.statementToCode(block, 'Fan');
  // TODO: Assemble JavaScript into code variable.
  var code = 'fan:\n'
  +''+statements_fan+'';
  return code;
};

Blockly.JavaScript['binary_fan_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_component_id = block.getFieldValue('component_id');
  var text_output_id = block.getFieldValue('output_id');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: binary\n'
  +'    name: "'+text_input_name+'"\n'
  +'    id: '+text_component_id+'\n'
  +'    output: '+text_output_id+'\n';
  return code;
};

Blockly.JavaScript['switch_pcf8574_component'] = function(block) {
  var text_switch_name = block.getFieldValue('switch_name');
  var text_pcf8574_id = block.getFieldValue('pcf8574_id');
  var text_pin_number = block.getFieldValue('pin_number');
  var dropdown_inverted = block.getFieldValue('inverted');
  var text_output_id = block.getFieldValue('output_id');
  var checkbox_interlock_check = block.getFieldValue('interlock_check') == 'TRUE';
  var text_interlock_name = block.getFieldValue('interlock_name');
  var text_output_id1 = block.getFieldValue('output_id1');
  var text_output_id2 = block.getFieldValue('output_id2');
  var checkbox_restore_mode = block.getFieldValue('restore_mode') == 'TRUE';
  var dropdown_restore_mode_list = block.getFieldValue('restore_mode_list');
  // TODO: Assemble JavaScript into code variable.
  var code =  '  - platform: gpio\n'
  +'    name: "'+text_switch_name+'"\n'
  +'    pin:\n'
  +'      pcf8574: '+text_pcf8574_id+'\n'
  +'      number: '+text_pin_number+'\n'
  +'      mode: OUTPUT\n'
  +'      inverted: '+dropdown_inverted+'\n'
  +'    id: '+text_output_id+'\n';

  if (checkbox_interlock_check){
  var code = code + '    interlock:\n'
  +'      &'+text_interlock_name+' ['+text_output_id1+', '+text_output_id2+']\n';
  }
  if (checkbox_restore_mode){
  var code = code + '    restore_mode: '+dropdown_restore_mode_list+'\n';
  }
  return code;
};

Blockly.JavaScript['binary_sensor_pcf8574_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_binary_sensor_id = block.getFieldValue('binary_sensor_id');
  var text_pcf8574_id = block.getFieldValue('pcf8574_id');
  var text_pin_number = block.getFieldValue('pin_number');
  var dropdown_inverted = block.getFieldValue('inverted');
  var value_automation_field = Blockly.JavaScript.valueToCode(block, 'automation_field', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  '  - platform: gpio\n'
  +'    name: "'+text_input_name+'"\n'
  +'    id: '+text_binary_sensor_id+'\n'
  +'    pin:\n'
  +'      pcf8574: '+text_pcf8574_id+'\n'
  +'      number: '+text_pin_number+'\n'
  +'      inverted: '+dropdown_inverted+'\n'
  +'      mode: INPUT\n'
  +''+value_automation_field+'';
  return code;
};

Blockly.JavaScript['endstop_cover_component'] = function(block) {
  var text_input_name = block.getFieldValue('input_name');
  var text_component_id = block.getFieldValue('component_id');
  var statements_open_action = Blockly.JavaScript.statementToCode(block, 'open_action');
  var text_open_duration = block.getFieldValue('open_duration');
  var text_open_binary_sensor_id = block.getFieldValue('open_binary_sensor_id');
  var statements_close_action = Blockly.JavaScript.statementToCode(block, 'close_action');
  var text_close_duration = block.getFieldValue('close_duration');
  var text_close_binary_sensor_id = block.getFieldValue('close_binary_sensor_id');
  var statements_stop_action = Blockly.JavaScript.statementToCode(block, 'Stop_action');
  // TODO: Assemble JavaScript into code variable.
    var code = '  - platform: endstop\n'
  + '    name: "'+text_input_name+'"\n'
  +'    id: '+text_component_id+'\n'
  +'    open_action:\n'
  +''+statements_open_action+''
  +'    open_duration: '+text_open_duration+'sec\n'
  +'    open_endstop: '+text_open_binary_sensor_id+'\n'
  +'    close_action:\n'
  +''+statements_close_action+''
  +'    close_duration: '+text_close_duration+'sec\n'
  +'    close_endstop: '+text_close_binary_sensor_id+'\n'
  +'    stop_action:\n'
  +''+statements_stop_action+'';
  return code;
};

Blockly.JavaScript['restart_switch_component'] = function(block) {
  var text_switch_name = block.getFieldValue('switch_name');
  // TODO: Assemble JavaScript into code variable.
  var code ='  - platform: restart\n'
  +'    name: "'+text_switch_name+'"\n';
  return code;
};

Blockly.JavaScript['shutdown_switch_component'] = function(block) {
  var text_switch_name = block.getFieldValue('switch_name');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: shutdown\n'
  +'    name: "'+text_switch_name+'"\n';
  return code;
};

Blockly.JavaScript['can_bus'] = function(block) {
  var text_id = block.getFieldValue('id');
  var text_can_id = block.getFieldValue('can_id');
  var dropdown_extended_id = block.getFieldValue('extended_id');
  var text_cs_pin = block.getFieldValue('cs_pin');
  var dropdown_bit_rate = block.getFieldValue('bit_rate');
  var dropdown_clock = block.getFieldValue('clock');
  var dropdown_mode = block.getFieldValue('mode');
  var statements_automations = Blockly.JavaScript.statementToCode(block, 'automations');
  // TODO: Assemble JavaScript into code variable.
  var code = 'canbus:\n'
  +'  - platform: mcp2515\n'
  +'    id: '+text_id+'\n'
  +'    can_id: '+text_can_id+'\n'
  +'    use_extended_id: '+dropdown_extended_id+'\n'
  +'    cs_pin: '+text_cs_pin+'\n'
  +'    bit_rate: '+dropdown_bit_rate+'\n'
  +'    clock: '+dropdown_clock+'\n'
  +'    mode: '+dropdown_mode+'\n';
if (statements_automations){
  var code = code + '    on_frame:\n'
  +''+statements_automations+'';
}
  return code;
};

Blockly.JavaScript['can_bus_action'] = function(block) {
  var text_can_id = block.getFieldValue('can_id');
  var dropdown_action_list = block.getFieldValue('action_list');
  var text_id = block.getFieldValue('id');
  // TODO: Assemble JavaScript into code variable.
  var code = '    - can_id: '+text_can_id+'\n'
  +'      then:\n'
  if (dropdown_action_list == 'receive_sensor_data'){
    code = code + '        - lambda: |-\n'
    +'            union myval {\n'
    +'            float fl;\n'
    +'            uint8_t my_bytes[4];\n'
    +'            } my_union_test;\n'
    +'            my_union_test.my_bytes[0]=x[0];\n'
    +'            my_union_test.my_bytes[1]=x[1];\n'
    +'            my_union_test.my_bytes[2]=x[2];\n'
    +'            my_union_test.my_bytes[3]=x[3];\n'
    +'            id('+text_id+').publish_state(my_union_test.fl);\n';
  }
  else {
    if (dropdown_action_list == 'logger.log'){
      code = code + '        - '+dropdown_action_list+': "'+text_id+'"\n';
    }
    else {
      code = code + '        - '+dropdown_action_list+': '+text_id+'\n';
    }
  }
  return code;
};

Blockly.JavaScript['si7021'] = function(block) {
  var text_temperature_name = block.getFieldValue('temperature_name');
  var checkbox_temperature_data = block.getFieldValue('temperature_data') == 'TRUE';
  var text_temp_can_bus_id = block.getFieldValue('temp_can_bus_id');
  var text_temp_can_id = block.getFieldValue('temp_can_id');
  var text_humidity_name = block.getFieldValue('humidity_name');
  var checkbox_humidity_data = block.getFieldValue('humidity_data') == 'TRUE';
  var text_hum_can_bus_id = block.getFieldValue('hum_can_bus_id');
  var text_hum_can_id = block.getFieldValue('hum_can_id');
  var text_update_interval = block.getFieldValue('update_interval');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: htu21d\n'
  +'    temperature:\n'
  +'      name: "'+text_temperature_name+'"\n';
  if (checkbox_temperature_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_temp_can_bus_id+'\n'
    +'            can_id: '+text_temp_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';
  }
  code = code + '    humidity:\n'
  +'      name: "'+text_humidity_name+'"\n';
  if (checkbox_humidity_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_hum_can_bus_id+'\n'
    +'            can_id: '+text_hum_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';;
  }
  code = code + '    update_interval: '+text_update_interval+'s\n';
  return code;
};

Blockly.JavaScript['bmp280'] = function(block) {
  var text_temperature_name = block.getFieldValue('temperature_name');
  var checkbox_temperature_data = block.getFieldValue('temperature_data') == 'TRUE';
  var text_temp_can_bus_id = block.getFieldValue('temp_can_bus_id');
  var text_temp_can_id = block.getFieldValue('temp_can_id');
  var text_pressure_name = block.getFieldValue('pressure_name');
  var checkbox_pressure_data = block.getFieldValue('pressure_data') == 'TRUE';
  var text_press_can_bus_id = block.getFieldValue('press_can_bus_id');
  var text_press_can_id = block.getFieldValue('press_can_id');
  var dropdown_address = block.getFieldValue('address');
  var text_update_interval = block.getFieldValue('update_interval');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: bmp280\n'
  +'    temperature:\n'
  +'      name: "'+text_temperature_name+'"\n';
  if (checkbox_temperature_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_temp_can_bus_id+'\n'
    +'            can_id: '+text_temp_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';
  }
  code = code + '    pressure:\n'
  +'      name: "'+text_pressure_name+'"\n';
  if (checkbox_pressure_data){
    code = code + '      on_value:\n'
    +'        - canbus.send:\n'
    +'            canbus_id: '+text_press_can_bus_id+'\n'
    +'            can_id: '+text_press_can_id+'\n'
    +'            data: !lambda |-\n'
    +'                static union myval {\n'
    +'                  float fl;\n'
    +'                  uint8_t my_bytes[4];\n'
    +'                } my_union_test;\n'
    +'                my_union_test.fl = x;\n'
    +'                return {my_union_test.my_bytes[0], my_union_test.my_bytes[1], my_union_test.my_bytes[2], my_union_test.my_bytes[3], 0, 0, 0, 0};\n';;
  }
  code = code + '    address: '+dropdown_address+'\n'
  +'    update_interval: '+text_update_interval+'s\n';
  return code;
};

Blockly.JavaScript['spi'] = function(block) {
  var text_clck_pin = block.getFieldValue('clck_pin');
  var text_mosi_pin = block.getFieldValue('mosi_pin');
  var text_miso_pin = block.getFieldValue('miso_pin');
  var text_id = block.getFieldValue('id');
  // TODO: Assemble JavaScript into code variable.
  var code = 'spi:\n'
  +'  clk_pin: '+text_clck_pin+'\n'
  +'  mosi_pin: '+text_mosi_pin+'\n'
  +'  miso_pin: '+text_miso_pin+'\n'
  +'  id: '+text_id+'\n';
  return code;
};

Blockly.JavaScript['pir'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_id = block.getFieldValue('id');
  var text_pin_number = block.getFieldValue('pin_number');
  var statements_on_detection = Blockly.JavaScript.statementToCode(block, 'on_detection');
  var statements_on_non_detection = Blockly.JavaScript.statementToCode(block, 'on_non_detection');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: gpio\n'
  +'    name: '+text_name+'\n'
  +'    id: '+text_id+'\n'
  +'    pin: '+text_pin_number+'\n'
  +'    device_class: motion\n';
  if (statements_on_detection){
    code = code + '    on_press:\n'
    +'      then:\n'
    +''+statements_on_detection+'\n';
  }
  if (statements_on_non_detection){
    code = code + '    on_release:\n'
    +'      then:\n'
    +''+statements_on_non_detection+'\n';
  }
  return code;
};

Blockly.JavaScript['pir_pcf8574'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_id = block.getFieldValue('id');
  var text_pcf8574_id = block.getFieldValue('pcf8574_id');
  var text_pin_number = block.getFieldValue('pin_number');
  var statements_on_detection = Blockly.JavaScript.statementToCode(block, 'on_detection');
  var statements_on_non_detection = Blockly.JavaScript.statementToCode(block, 'on_non_detection');
  // TODO: Assemble JavaScript into code variable.
  var code = '  - platform: gpio\n'
  +'    name: '+text_name+'\n'
  +'    id: '+text_id+'\n'
  +'    pin:\n'
  +'      pcf8574: '+text_pcf8574_id+'\n'
  +'      number: '+text_pin_number+'\n'
  +'    device_class: motion\n';
  if (statements_on_detection){
    code = code + '    on_press:\n'
    +'      then:\n'
    +''+statements_on_detection+'\n';
  }
  if (statements_on_non_detection){
    code = code + '    on_release:\n'
    +'      then:\n'
    +''+statements_on_non_detection+'\n';
  }
  return code;
};

Blockly.JavaScript['can_bus_send_action'] = function(block) {
  var text_can_bus_id = block.getFieldValue('can_bus_id');
  var text_can_id = block.getFieldValue('can_id');
  var text_data = block.getFieldValue('data');
  // TODO: Assemble JavaScript into code variable.
  var code = '      - canbus.send:\n'
  +'          canbus_id: '+text_can_bus_id+'\n'
  +'          can_id: '+text_can_id+'\n'
  +'          data: '+text_data+'\n';
  return code;
};

Blockly.JavaScript['binary_sensor_automation'] = function(block) {
  var statements_automation_field_on_click = Blockly.JavaScript.statementToCode(block, 'automation_field_on_click');
  var statements_automation_field_on_double_click = Blockly.JavaScript.statementToCode(block, 'automation_field_on_double_click');
  var statements_automation_field_on_multi_click = Blockly.JavaScript.statementToCode(block, 'automation_field_on_multi_click');
  var statements_automation_field_on_press = Blockly.JavaScript.statementToCode(block, 'automation_field_on_press');
  var statements_automation_field_on_release = Blockly.JavaScript.statementToCode(block, 'automation_field_on_release');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (statements_automation_field_on_click){
    var code = code + '    on_click:\n'
    +''+statements_automation_field_on_click+'';
  }
  if (statements_automation_field_on_double_click){
    var code = code + '    on_double_click:\n'
    +''+statements_automation_field_on_double_click+'';
  }
  if (statements_automation_field_on_multi_click){
    var code = code + '    on_multi_click:\n'
    +''+statements_automation_field_on_multi_click+'';
  }
  if (statements_automation_field_on_press){
    var code = code + '    on_press:\n'
    +'      then:\n'
    +''+statements_automation_field_on_press+'';
  }
  if (statements_automation_field_on_release){
    var code = code + '    on_release:\n'
    +'      then:\n'
    +''+statements_automation_field_on_release+'';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['template_sensor'] = function(block) {
  var text_value_name = block.getFieldValue('value_name');
  var text_sensor_id = block.getFieldValue('sensor_id');
  var dropdown_unit_of_measurement = block.getFieldValue('unit_of_measurement');
  var dropdown_device_class = block.getFieldValue('device_class');
  var text_update_interval = block.getFieldValue('update_interval');
  // TODO: Assemble JavaScript into code variable.
  var code = '- platform: template\n'
  +'  name: "'+text_value_name+'"\n'
  +'  id: '+text_sensor_id+'\n'
  +'  unit_of_measurement: "'+dropdown_unit_of_measurement+'"\n';
  if (dropdown_device_class == 'carbon_monoxide' || dropdown_device_class == 'carbon_dioxide'){
    code = code +'  icon: mdi:fire\n';
  }
  else {
    code = code +'  device_class: "'+dropdown_device_class+'"\n';
  }
  
  code = code +'  update_interval: '+text_update_interval+'s\n';
  return code;
};

Blockly.JavaScript['api'] = function(block) {
  var text_api_password = block.getFieldValue('api_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'api:\n'
  +'  password: "'+text_api_password+'"\n';
  return code;
};