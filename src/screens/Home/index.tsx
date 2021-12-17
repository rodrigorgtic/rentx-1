import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Button } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { RFValue } from 'react-native-responsive-fontsize';
import { synchronize } from '@nozbe/watermelondb/sync';

import { database } from '~/database';
import Logo from '~/assets/logo.svg';
import api from '~/services/api';
import { CarDTO } from '~/dtos/CarDTO';
import { Car, LoadAnimation } from '~/components';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  LoadContainer,
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([] as CarDTO[]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();
  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  async function offlineSynchronize() {
    const carCollection = database.get('cars');
    const res = await carCollection
      .query()
      .fetch()
      .then((item) => {
        return item?.map((item: any) => {
          return {
            id: item.id,
            updated_at_: item._raw.updated_at_,
          };
        });
      });

    await synchronize({
      database,
      pullChanges: async ({ }) => {
        const { data } = await api.get(`cars/sync/pull`, {
          params: { cars: JSON.stringify(res) }
        });

        const { changes, latestVersion } = data;
        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const userMe = changes.users;

        if (userMe?.updated.length > 0) {
          const user = {
            user_id: userMe.updated[0].user_id,
            name: userMe.updated[0].person_name,
            driver_license: userMe.updated[0].person_driver_license,
            avatar: userMe.updated[0].person_avatar,
            privacy: userMe.updated[0]._privacy,
          };

          await api.post('users/mobiles/sync', user);
        }
      },
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        if (isMounted) {
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchCars();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total {`${cars.length}`} carros</TotalCars>}
        </HeaderContent>
      </Header>
      <Button title="sincronizar" onPress={offlineSynchronize} />
      {loading ? (
        <LoadContainer>
          <LoadAnimation />
        </LoadContainer>
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
