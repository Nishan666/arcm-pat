import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props: any) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => console.log('Logout')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' },
  logoutBtn: { paddingVertical: 15, backgroundColor: '#ff3b30', borderRadius: 5 },
  logoutText: { color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});
