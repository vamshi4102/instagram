import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {notificationsList} from '../../utils/used-data/static-data';
import NotificationCard from '../../components/notificationCard';

const Notifications = () => {
  return (
    <View>
      <FlatList
        data={notificationsList}
        renderItem={({item}) => <NotificationCard item={item} />}
      />
    </View>
  );
};

export default Notifications;
