import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard from './EventCard';

const EventList = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const eventList = require('../../data/db.json').events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    return eventList;
  };

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(events.map((e) => ({...e, timer: Date.now()})));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [events]);

  const handleAddEvent = () => {
    props.navigation.navigate('form');
  };

  return [
    <FlatList
      style={styles.list}
      data={events}
      renderItem={({item}) => <EventCard event={item} />}
      keyExtractor={(item) => item.id}
    />,
    <ActionButton
      key="fab"
      onPress={handleAddEvent}
      buttonColor="rgba(231, 76, 60, 1)"
    />,
  ];
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3',
  },
});

export default EventList;
