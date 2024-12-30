import { Text, View } from 'react-native'
import { Link } from 'expo-router';
import { verifyInstallation } from 'nativewind';

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className="text-3xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
