import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Calendar, CalendarList, MultiDotMarking } from 'react-native-calendars';
import { colors } from '../../components/Colors'

const Calender = () => {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateSelect = (date) => {
    const selected = { ...selectedDates };

    if (selected[date.dateString]) {
      delete selected[date.dateString];
    } else {
      selected[date.dateString] = { selected: true, dots: [{ key: 'selected', color: 'blue', selectedDotColor: 'white' }] };
    }

    setSelectedDates(selected);
  };

  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.textStyle}>Calender</Text>
      <Calendar
        markedDates={selectedDates}
        markingType={'multi-dot'}
        onDayPress={handleDateSelect}
      />
    </View>
  )
}

export default Calender

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '500',
    textAlign: "center"
  }
})