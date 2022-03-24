import React, { useState, useEffect} from 'react';
import {
  Text, Button, ScrollView, RefreshControl, StyleSheet
} from 'react-native';
import {
  Card,
} from 'react-native-paper';
import BusController from './bus';

export default function App() {
  const [item1, setItems1] = useState([]);
  const [item2, setItems2] = useState([]);
  const [item3, setItems3] = useState([]);
  const [item4, setItems4] = useState([]);
  const [item5, setItems5] = useState([]);
  const [item6, setItems6] = useState([]);
  const [item7, setItems7] = useState([]);
  const [item8, setItems8] = useState([]);
  const [item9, setItems9] = useState([]);
  const [item10, setItems10] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh1 = () => {
    setRefreshing(true);
    BusController.route(1320).then((res) => {
      setItems1(res);
      setRefreshing(false);
    });
  };
  const onRefresh2 = () => {
    BusController.route(1321).then((res) => {
      setItems2(res);
      setRefreshing(false);
    });
  };
  const onRefresh3 = () => {
    BusController.route(1721).then((res) => {
      setItems3(res);
      setRefreshing(false);
    });
  };
  const onRefresh4 = () => {
    BusController.route(1720).then((res) => {
      setItems4(res);
      setRefreshing(false);
    });
  };
  const onRefresh5 = () => {
    setRefreshing(true);
    BusController.route(1330).then((res) => {
      setItems5(res);
      setRefreshing(false);
    });
  };
  const onRefresh6 = () => {
    BusController.route(1331).then((res) => {
      setItems6(res);
      setRefreshing(false);
    });
  };
  const onRefresh7 = () => {
    BusController.route(1731).then((res) => {
      setItems7(res);
      setRefreshing(false);
    });
  };
  const onRefresh8 = () => {
    BusController.route(1730).then((res) => {
      setItems8(res);
      setRefreshing(false);
    });
  };
  const onRefresh9 = () => {
    BusController.state(0).then((res) => {
      setItems9(res);
      setRefreshing(false);
    });
  };
  const onRefresh10 = () => {
    BusController.state(1).then((res) => {
      setItems10(res);
      setRefreshing(false);
    });
  };

  const onRefresh = () => {
    onRefresh1();
    onRefresh2();
    onRefresh3();
    onRefresh4();
    onRefresh5();
    onRefresh6();
    onRefresh7();
    onRefresh8();
    onRefresh9();
    onRefresh10();
  };

  return (
    <ScrollView
      refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />)}
    >
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          BusController.route(1320).then(() => { onRefresh1();});
        }}
        title="132 中壢->中央大學"
        color="#FFBF00"
      />
      { item1.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          BusController.route(1321).then(() => { onRefresh2(); });
        }}
        title="132 中央大學->中壢"
        color="#007FFF"
      />
      { item2.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          BusController.route(1721).then(() => { onRefresh3();});
        }}
        title="172 高鐵桃園站->中央大學"
        color="#FFBF00"
      />
      { item3.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          BusController.route(1721).then(() => { onRefresh4(); });
        }}
        title="172 中央大學->高鐵桃園站"
        color="#007FFF"
      />
      { item4.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          BusController.route(1330).then(() => { onRefresh5();});
        }}
        title="133 中壢->中央大學"
        color="#FFBF00"
      />
      { item5.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          BusController.route(1331).then(() => { onRefresh6(); });
        }}
        title="133 中央大學->中壢"
        color="#007FFF"
      />
      { item6.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          BusController.route(1731).then(() => { onRefresh7();});
        }}
        title="173 高鐵桃園站->中央大學"
        color="#FFBF00"
      />
      { item7.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          BusController.route(1731).then(() => { onRefresh8(); });
        }}
        title="173 中央大學->高鐵桃園站"
        color="#007FFF"
      />
      { item8.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          onRefresh9();
        }}
        title="中央大學正門"
        color="#FFBF00"
      />
      { item9.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          onRefresh10();
        }}
        title="中央大學警衛室"
        color="#FFBF00"
      />
      { item10.map(({
        id,state, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Text>{state}</Text>
            <Text style={styles.time}>{time}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  time:{textAlign:'right'}});