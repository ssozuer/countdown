import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {formatDateTime} from '../../api/api';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  },
});

const EventForm = (props) => {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePress = () => {
    props.navigation.navigate('list');
  };

  const handleChangeTitle = (value) => {
    if (value) {
      setTitle(value);
    }
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDatePicked = (value) => {
    setDate(value);
    handleDatePickerHide();
  };

  const handleDatePickerHide = () => {
    setShowDatePicker(false);
  };

  return (
    <View>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.text}
          placeholder="Event title"
          spellCheck={false}
          value={title}
          onChangeText={handleChangeTitle}
        />
        <TextInput
          style={[styles.text, styles.borderTop]}
          placeholder="Event Date"
          spellCheck={false}
          value={formatDateTime(date.toString())}
          editable={!showDatePicker}
          onFocus={handleDatePress}
        />
        <DateTimePicker
          isVisible={showDatePicker}
          mode="datetime"
          onConfirm={handleDatePicked}
          onCancel={handleDatePickerHide}
        />
      </View>
      <TouchableHighlight onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
