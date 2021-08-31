import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const MOVIES_URL = "Get_Movies";
// Create a client
const queryClient = new QueryClient();
const getMovies = async () => {
  const response = await fetch("https://reactnative.dev/movies.json");
  return response.json();
};
const ReactQueryDemo = () => {
  const { data, isLoading } = useQuery(MOVIES_URL, getMovies);
  console.log("data", data);
  useEffect(() => {
    queryClient.invalidateQueries(MOVIES_URL);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data?.movies}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const Container = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDemo />
    </QueryClientProvider>
  );
};
export default Container;
